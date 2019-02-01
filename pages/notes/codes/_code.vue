<template>
  <main class="container">
    <div class="content">
      <h1><span>{{ thisPost.title.split(' ')[0] }}</span><span>{{ thisPost.title.split(' ').pop() }}</span></h1>
    
      <dl v-if="thisPost.type == 'cheatsheet'" class="code-snippets">
        <code-snippet-accordion-component v-for="snippet in snippets" :key="snippet.slug" :item="snippet" />
      </dl>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

const posts = {};
const reqPosts = require.context('@/pages/notes/codes/', false, /\.md$/);

reqPosts.keys().forEach((key) => {
  posts[key] = reqPosts(key)
})

const snippets = {};
const reqSnippets = require.context('@/pages/notes/codes/snippets', true, /\.md$/);

reqSnippets.keys().forEach((key) => {
  snippets[key] = reqSnippets(key)
})

import CodeSnippetAccordionComponent from '~/components/code-snippet-accordion-component.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 3
  },

  components: {
    CodeSnippetAccordionComponent
  },

  data: () => ({
    
  }),

  computed: {
    posts() {
      return this.getPosts(posts)
    },

    thisPost() {
      let thisCode = this.posts.find(code => code.title == this.$route.params.code)

      return thisCode
    },

    title() {
      return this.thisPost.title
    },

    snippets() { 
      if (this.thisPost.type == 'cheatsheet') {
        let category = this.thisPost.title.split(' ')[0].toLowerCase()

        return this.getPosts(snippets).filter(snippet => (snippet.category.toLowerCase() == category))
      }
    }
  },

  methods: {
    getPosts(list) {
      const postArray = [];

      Object.keys(list).forEach((key) => {
        const post = list[key]

        postArray.push(post);
      });

      return postArray
    }
  }
}
</script>

<style lang="scss" scoped>
.code-snippets {
  // background-color: lightblue;
  display: flex;
  flex-direction: column;
  // align-items: center;
}

/deep/ dt {
  // background: red;
  // flex: 1;
  width: 100%;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;
}
</style>