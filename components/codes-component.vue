<template>
  <div class="codes">
    <ul class="code-posts">
      <li v-for="post in codes" class="code-post">
        {{ post.title }}
      </li>
    </ul>

    <dl>
      <!-- <code-snippet-accordion-component v-for="code in codes" :key="code.slug" :item="code" /> -->
    </dl>
  </div>
</template>

<script>
import CodeSnippetAccordionComponent from '~/components/code-snippet-accordion-component.vue'

const codes = {};
const codeSnippets = {};
const req = require.context('@/pages/notes/codes/', false, /\.md$/);

req.keys().forEach((key) => {
  codes[key] = req(key);
});

export default {
  components: {
    CodeSnippetAccordionComponent
  },

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
    }
  }
}
</script>

<style lang="scss" scoped>
.codes {
  @include full-width;
}

.code-posts {
  padding-left: 0;
}

.code-post {
  background-color: black;
  color: color(highlight)
}
</style>