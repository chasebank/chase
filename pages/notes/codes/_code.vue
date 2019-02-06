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
    // console.clear();
    // console.log('mounted')

    function makeResizable(pen) {
      let handle = document.createElement('div'),
          iframe = pen.getElementsByTagName('iframe')[0],
          minimum_size = 50,
          original_width,
          original_height,
          original_mouse_x,
          original_mouse_y,
          maximum_width      

      pen.style.height = iframe.height + 'px'
      pen.appendChild(handle)
      
      handle.className = 'handle'
      handle.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(pen, null).getPropertyValue('width').replace('px', ''))
        original_height = parseFloat(getComputedStyle(pen, null).getPropertyValue('height').replace('px', ''))
        maximum_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - pen.getBoundingClientRect().left
        original_mouse_x = e.pageX
        original_mouse_y = e.pageY
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })

      function resize(e) {
        let width = original_width + (e.pageX - original_mouse_x),
            height = original_height + (e.pageY - original_mouse_y)
        
        if (width > minimum_size && width < maximum_width) {
          pen.style.width = width + 'px'
        }
        
        if (height > minimum_size) {
          pen.style.height = height + 'px'
        }
        
        iframe.style.zIndex = '-1'
      }
      
      function stopResize() {
        window.removeEventListener('mousemove', resize)
        
        iframe.style.removeProperty("z-index")
      }
    }

    setTimeout(() => {
      // let pens = this.$el.querySelectorAll('.cp_embed_wrapper')
      let pens = this.$el.querySelectorAll('.cp_embed_wrapper')

      // console.log('in timeout')
      // console.log(pens)

      for (let pen of pens) {
        makeResizable(pen)
        // console.log('inside loop');
        
        // console.log(pen)
      }
    }, 300)

    // this.$nextTick(() => {
    
    // })

    // function __CodePenIFrameAddedToPage() {
    //   let pens = this.$el.querySelectorAll('.cp_embed_wrapper')

    //   console.log('__CodePenIFrameAddedToPage')
    //   console.log(pens)

    //   // for (let pen of pens) {
    //   //   makeResizable(pen)
    //   // }
    // }
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
  display: flex;
  flex-direction: column;
}

/deep/ {
   dt {
    width: 100%;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }

  iframe {
    position: relative;
    min-height: 100%;
    height: auto;
  }

  .cp_embed_wrapper {
    position: relative;
    overflow: hidden;
    
    + .cp_embed_wrapper {
      margin-top: 2rem;
    }
  }

  .handle {
    position: absolute;
    bottom: 0;
    right: 0;
    clip-path: polygon(100% 0,100% 100%,0 100%);
    background: repeating-linear-gradient(135deg,lightblue, lightblue 2px, transparent 2px, transparent 4px);
    width: 24px;
    height: 24px;
    cursor: nwse-resize;
    z-index: 999;
  }
}
</style>