<template>
  <div>
    <h3><span>Notes</span></h3>
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

export default {
  mounted() {
    
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