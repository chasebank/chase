<template>
  <!-- <div class="posts posts--colcade colcade">
    <div class="posts--colcade-col colcade-col"></div>
    <div class="posts--colcade-col colcade-col"></div>
    <div class="posts--colcade-col colcade-col"></div>
    <div class="posts--colcade-col colcade-col"></div>

    <div>
      <div v-for="post in allPosts" :key="post.title" class="post posts--colcade-item colcade-item">
        <quote-component v-if="post.category == 'quote'" :quote="post" />

        <article v-else>
          <span class="post-title">{{ post.title }}</span>
          <p>Lorem this is an example of a post description.</p>
          <nuxt-link :to="'/notes/codes/' + post.title"></nuxt-link>
        </article>
      </div>
    </div>
  </div> -->

  <section>
    <ul class="notes-filter">
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('quotes')" :class="{'active' : visiblePostTypes.includes('quotes')}">Quotes</button>
      </li>
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('books')" :class="{'active' : visiblePostTypes.includes('books')}">Books</button>
      </li>
      <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('codes')" :class="{'active' : visiblePostTypes.includes('codes')}">Codes</button>
      </li>
      <!-- <li class="notes-filter--option">
        <button class="notes-filter--option--button" @click="togglePostType('blog')" :class="{'active' : visiblePostTypes.includes('blog')}">Blog</button>
      </li> -->
    </ul>

    <!-- <pre>{{ filteredPosts }}</pre> -->

    <transition-group class="masonry" tag="ul" name="transition--post-filter-" @enter="resetGrid" @after-leave="resetGrid">
      <li class="no-posts" v-if="filteredPosts.length < 1" key="noPosts">Choose a category from the options above</li>
      <li v-for="post in filteredPosts"
          :key="post.title"
          :class="post.category"
          class="masonry-item">
        <quote-component v-if="post.category == 'quotes'" :quote="post" class="quote" />

        <article v-else>
          <span class="post-title">{{ post.title }}</span>
          <p>Lorem this is an example of a post description.</p>
          <!-- <nuxt-link :to="'/notes/codes/' + post.title"></nuxt-link> -->
        </article>
      </li>
    </transition-group>

    <!-- <ul class="posts posts--masonry masonry">
      <li v-for="post in filteredPosts" :key="post.title"
      class="post posts--masonry-item masonry-item"
      :class="post.category">
        <quote-component v-if="post.category == 'quotes'" :quote="post" class="quote" />

        <article v-else>
          <span class="post-title">{{ post.title }}</span>
          <p>Lorem this is an example of a post description.</p>
        </article>
      </li>
    </ul> -->
  </section>
</template>


<script>
const quotes = {};
const reqQuotes = require.context('@/pages/notes/quotes/', false, /\.md$/);
reqQuotes.keys().forEach((key) => {
  quotes[key] = reqQuotes(key);
})

const codes = {};
const reqCodes = require.context('@/pages/notes/codes/', false, /\.md$/);
reqCodes.keys().forEach((key) => {
  codes[key] = reqCodes(key);
})

const books = {};
const reqBooks = require.context('@/pages/notes/books/', false, /\.md$/);
reqBooks.keys().forEach((key) => {
  books[key] = reqBooks(key);
})

import quoteComponent from '~/components/quote-component.vue'

export default {
  components: {
    quoteComponent
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
    visiblePostTypes: ['quotes','books','codes']
  }),

  computed: {
    codes() {
      const postArray = [];

      let getPosts = (posts) => {
        Object.keys(posts).forEach((key) => {
          const post = posts[key]

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
            
          post.slug = key.replace('./', '').replace('.md', '');

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
            
          post.slug = key.replace('./', '').replace('.md', '');

          postArray.push(post);
        });
      }

      getPosts(books)

      return postArray
    },

    allPosts() {
      let allPosts = [...this.quotes, ...this.codes, ...this.books]

      let allPostsSortedByDate = allPosts.sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      });
      
      return allPostsSortedByDate
    },

    filteredPosts() {
      let filteredPosts = this.allPosts.filter(post => (
        this.visiblePostTypes.indexOf(post['category'].toString().toLowerCase()) > -1
      ))
      
      let filteredPostsSortedByDate = filteredPosts.sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      });
      
      return filteredPostsSortedByDate
    }
  },

  methods: {
    togglePostType(type) {
      let index = this.visiblePostTypes.indexOf(type)
      
      index !== -1 ? this.visiblePostTypes.splice(index, 1) : this.visiblePostTypes.push(type)
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
  transition: opacity .2s
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
</style>
