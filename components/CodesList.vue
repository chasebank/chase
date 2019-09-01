<template>
  <section class="codes codes--masonry masonry">
    <article v-for="post in posts" :key="post.language" class="code-post codes--masonry-item masonry-item">
      <span class="post-title">{{ post.language }}</span>
      <p>Lorem this is an example of a post description.</p>
      <nuxt-link :to="'/notes/codes/' + post.language.toLowerCase()"></nuxt-link>
    </article>
  </section>
</template>

<script>
// const codes = {};
// const codeSnippets = {};
// const req = require.context('@/pages/notes/codes/', false, /\.md$/);

// req.keys().forEach((key) => {
//   codes[key] = req(key);
// });

export default {
  props: {
    posts: {
      type: Array
    }
  },

  mounted() {
    let Masonry = require('masonry-layout')

    let grid = document.querySelector('.codes--masonry')
    let msnry = new Masonry(grid, { itemSelector: '.codes--masonry-item' })
  },

  computed: {
    // codes() {
    //   const postArray = [];

    //   let getPosts = (posts) => {
    //     Object.keys(posts).forEach((key) => {
    //       const post = posts[key]

    //       postArray.push(post);
    //     });
    //   }

    //   getPosts(codes)

    //   return postArray
    // }
  }
}
</script>

<style lang="scss" scoped>
.codes {
  @include full-width;
}

.code-post {
  position: relative;
  background-color: rgba(0,0,0,.5);
  padding: 1rem;
  box-shadow: 0 1rem 1.5rem -1rem rgba(7, 57, 72, .25);
  text-shadow: 0 0.1em 0.2em black;
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
</style>