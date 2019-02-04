<template>
  <main class="container">
    <div class="content">
      <h1><span>{{ thisPost.title.split(' ')[0] }}</span><span>{{ thisPost.title.split(' ').pop() }}</span></h1>
    
      <dl v-if="thisPost.type == 'cheatsheet'" class="code-snippets">
        <code-snippet-accordion-component v-for="snippet in snippets" :key="snippet.slug" :item="snippet" />
      </dl>
    </div>

    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
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

  mounted() {
    function makeResizableDiv(pen) {
      let handle = document.createElement('div')
      
      pen.appendChild(handle)
      
      handle.className = 'handle'
      
      console.log(handle)

      const minimum_size = 20;
      let original_width = 0;
      let original_height = 0;
      let original_x = 0;
      let original_y = 0;
      let original_mouse_x = 0;
      let original_mouse_y = 0;
      
      handle.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(pen, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(pen, null).getPropertyValue('height').replace('px', ''));
        original_x = pen.getBoundingClientRect().left;
        original_y = pen.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
        
        console.log('tried to resize')
      })

      function resize(e) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          pen.style.width = width + 'px'
        }
        if (height > minimum_size) {
          pen.style.height = height + 'px'
        }
      }
      
      function stopResize() {
        window.removeEventListener('mousemove', resize)
      }
    }



    function __CodePenIFrameAddedToPage() {
      let pens = document.getElementsByClassName('resizable-pen')

      for (let pen of pens) {
        makeResizableDiv(pen)
      }
    }
  },

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

/deep/ .cp_embed_wrapper {
  // @include full-width;

  /* required for resize to work */
  overflow: hidden;
  
  /* make resizeble! */
  resize: both;
  
  /* required to see the handle */
  background: white;
  padding-bottom: 10px;
	// // Full width as detailed at: https://css-tricks.com/full-width-containers-limited-width-parents/
  // width: $fullWidth;
  // position: relative;
  // left: 50%;
  // right: 50%;
  // margin-left: -50vw;
  // margin-right: -50vw;

  iframe {
    height: 100% !important;
  }
}
</style>