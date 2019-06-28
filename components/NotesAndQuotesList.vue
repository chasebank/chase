<template>
  <section>
    <ul class="notes-filter">
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('codes')" :class="{'active' : visiblePostTypes.includes('codes') && filterActivated}">Codes</button>
      </li>
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('posts')" :class="{'active' : visiblePostTypes.includes('posts') && filterActivated}">Posts</button>
      </li>
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('books')" :class="{'active' : visiblePostTypes.includes('books') && filterActivated}">Books</button>
      </li>
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('quotes')" :class="{'active' : visiblePostTypes.includes('quotes') && filterActivated}">Quotes</button>
      </li>
    </ul>

    <transition-group class="masonry" tag="ul" name="transition--post-filter-" @enter="resetGrid" @after-leave="resetGrid">
      <li class="no-posts" v-if="filteredPosts.length < 1" key="noPosts">Choose a category from the options above</li>
      <li v-for="post in filteredPosts"
          :key="post.title"
          class="masonry-item">
        <CodeItem v-if="post.category == 'codes'" :code="post" class="code"/>

        <BookItem v-if="post.category === 'books'" :book="post"/>

        <QuoteItem v-if="post.category === 'quotes'" :quote="post" class="quote"/>
      </li>
    </transition-group>
  </section>
</template>


<script>
import dayjs from 'dayjs'



const quotes = {};
const reqQuotes = require.context('@/pages/notes/quotes/', false, /\.md$/);
reqQuotes.keys().forEach((key) => {
  quotes[key] = reqQuotes(key);
})

const books = {};
const reqBooks = require.context('@/pages/notes/books/', false, /\.md$/);
reqBooks.keys().forEach((key) => {
  books[key] = reqBooks(key);
})

const codes = {};
const reqCodes = require.context('@/pages/notes/codes/snippets/', true, /\.md$/);
reqCodes.keys().forEach((key) => {
  codes[key] = reqCodes(key);
})



import QuoteItem from '~/components/QuoteItem.vue'
import BookItem from '~/components/BookItem.vue'
import CodeItem from '~/components/CodeItem.vue'

export default {
  components: {
    QuoteItem,
    BookItem,
    CodeItem
  },

  mounted() {
    let Masonry = require('masonry-layout')
    
    this.$nextTick(() => {
      // grid right margin was wrong on first load
      // think it has to do with delay setting the $fullwidth var
      // $nextTick seems to fix
      let grid = this.$el.querySelector('.masonry')
      let msnry = new Masonry(grid, { itemSelector: '.masonry-item' })
    })
  },

  data: () => ({
    visiblePostTypes: ['quotes','books','codes','posts'],
    filterActivated: false
  }),

  computed: {
    codes() {
      const postArray = [];

      let getPosts = (posts) => {
        Object.keys(posts).forEach((key) => {
          const post = posts[key]

          post.langauge = post.category
          post.category = 'codes'

          postArray.push(post);
        });
      }

      getPosts(codes)

      return postArray
    },

    quotes() {
      const postArray = [];

      let getPosts = (posts) => {
        Object.keys(posts).forEach((key) => {
          const post = posts[key]
            
          post.slug = key.replace('./', '').replace('.md', '')

          postArray.push(post);
        });
      }

      getPosts(quotes)

      return postArray
    },

    books() {
      const postArray = [];

      let getPosts = (posts) => {
        Object.keys(posts).forEach((key) => {
          const post = posts[key]
            
          post.slug = key.replace('./', '').replace('.md', '')
          post.cover = require('~/assets/book-assets/' + post.slug + '.jpg')

          postArray.push(post);
        });
      }

      getPosts(books)

      return postArray
    },

    allPosts() {
      let allPosts = [...this.quotes, ...this.books, ...this.codes]

      let allPostsSortedByDate = allPosts.sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))
      
      return allPostsSortedByDate
    },

    filteredPosts() {
      let filteredPosts = this.allPosts.filter(post => (
        this.visiblePostTypes.indexOf(post['category'].toString().toLowerCase()) > -1
      ))
      
      let filteredPostsSortedByDate = filteredPosts.sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))
      
      return filteredPostsSortedByDate
    }
  },

  methods: {
    togglePostType(type) {
      if (!this.filterActivated) {
        this.visiblePostTypes = [type]

        this.filterActivated = true
      }

      else {
        console.log('filtering posts') 

        let index = this.visiblePostTypes.indexOf(type)

        console.log('clicked index', index)
      
        index !== -1 ? this.visiblePostTypes.splice(index, 1) : this.visiblePostTypes.push(type)
      }
    },

    resetGrid() {
      let Masonry = require('masonry-layout')
      let gridEl = this.$el.querySelector('.masonry')

      Masonry.data(gridEl).reloadItems()

      this.$nextTick(() => {
        Masonry.data(gridEl).layout()
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.masonry {
  @include full-width;
  list-style: none;
}

.post-title {
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: color(mid);
}

p {
  margin-bottom: 0;
  margin-top: 0;
}

a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.notes-filter {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 5vw;
}

.notes-filter--option {

  + li {
    margin-left: 10vw;
  }
}

.notes-filter--option--button {
  position: relative;
  background: none;
  border: none;
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-weight: bold;
  font-size: 1.5rem;
  padding: .2rem .4rem;
  color: color(mid);
  text-shadow: 0 .05em .15em black;
  transition: color .25s;
  cursor: pointer;

  &:before {
    display: block;
    content: '';
    background-color: rgba(color(highlight), .2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
  }

  &.active{
    color: color(light);

    &:before {
      opacity: 1;
    }
  }
}

.transition--post-filter--enter-active,
.transition--post-filter--leave-active {
  transition: opacity .4s
}

.transition--post-filter--enter,
.transition--post-filter--leave-to {
  opacity: 0
}

.no-posts {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: color(light);
  text-shadow: 0 .05em .15em black;
  z-index: -1;
}



/deep/ {
  .neil-degrasse-tyson {
    .quote--author-image {
      left: -6rem
    }
  }

  .cs-lewis, {
    .quote--author-image {
      left: -4rem;
      min-height: 25rem!important;
    }
  }

  .seneca {
    .quote--author-image {
      @include responsive-property("left", 0rem, -3rem);
      max-height: 17rem;
    }
  }

  @media screen and (max-width: 1400px) {
    
  }
  
  @media screen and (max-width: $mediumScreen) {
    
  }
  
  @media screen and (max-width: 650px) {
    .neil-degrasse-tyson {
      .quote--author-image {
        @include responsive-property("left", -5rem, -1rem, 400px, 650px);
      }
    }

    .cs-lewis {
      .quote--author-image {
        @include responsive-property("left", -5rem, -2rem, 400px, 650px);
      }
    }

  }
}
</style>
