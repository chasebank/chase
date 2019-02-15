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
  <div>
    <ul class="posts posts--masonry masonry">
      <li v-for="post in allPosts" :key="post.title"
      class="post posts--masonry-item masonry-item"
      :class="post.category">
        <quote-component v-if="post.category == 'quote'" :quote="post" class="quote" />

        <article v-else>
          <span class="post-title">{{ post.title }}</span>
          <p>Lorem this is an example of a post description.</p>
          <!-- <nuxt-link :to="'/notes/codes/' + post.title"></nuxt-link> -->
        </article>
      </li>
    </ul>
  </div>
</template>


<script>
const quotes = {};
const reqQuotes = require.context('@/pages/notes/quotes/', false, /\.md$/);
reqQuotes.keys().forEach((key) => {
  quotes[key] = reqQuotes(key);
});

const codes = {};
const reqCodes = require.context('@/pages/notes/codes/', false, /\.md$/);
reqCodes.keys().forEach((key) => {
  codes[key] = reqCodes(key);
});

import quoteComponent from '~/components/quote-component.vue'

export default {
  components: {
    quoteComponent
  },

  mounted() {
    var grid = document.querySelector('.posts--masonry')
    var msnry = new Masonry(grid, { itemSelector: '.posts--masonry-item' })
  },

  data: () => ({
    
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

    allPosts() {
      // function randomDate(start, end) {
      //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      // }
      // randomDate(new Date(2015, 0, 1), new Date())
      
      // let posts = new Array(4).fill().map((e, i) => {
      //   return { cat: "posts", date: randomDate(new Date(2015, 0, 1), new Date()) }
      // });
      // let quotes = new Array(7).fill().map((e, i) => {
      //   return { cat: "quotes", date: randomDate(new Date(2015, 0, 1), new Date()) }
      // });
      // let codes = new Array(5).fill().map((e, i) => {
      //   return { cat: "codes", date: randomDate(new Date(2015, 0, 1), new Date()) }
      // });
      
      let allPosts = [...this.quotes, ...this.codes]

      // let filteredPosts = allPosts.filter(post => (
      //   this.visiblePostTypes.indexOf(post['cat'].toString().toLowerCase()) > -1
      // ))

      // let filteredPostsSortedByDate = filteredPosts.sort((a, b) => {
      //   return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      //  });
      
      let allPostsSortedByDate = allPosts.sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      });
      
      // return filteredPostsSortedByDate
      
      return allPostsSortedByDate
    },
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>
// ul {
//   list-style: none;
// }

// li {
//   color: white;
// }

.posts {
  @include full-width;
}

.masonry .post {
  position: relative;
  // background-color: rgba(0,0,0,.5);
  // padding: 1rem;
  box-shadow: 0 1rem 1.5rem -1rem rgba(7, 57, 72, .25);
  text-shadow: 0 0.1em 0.2em black;
  width: colWidth($columns: 4);

  @media screen and (max-width: 1000px) {
    width: colWidth($columns: 2);
  }
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

.posts.masonry .masonry-item {
  // background: red;
  width: colWidth($columns: 3);

  // @media screen and (max-width: 650px) {
  //   width: colWidth($columns: 1);
  // }
  
  // @media screen and (max-width: 1000px) {
  //   @include set-grid(2);
  // }
  
  // @media screen and (max-width: 650px) {
  //   @include set-grid(1);
  // }
}
</style>
