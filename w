[33mcommit 59fbe447f241ca11496d48c99a717c4f0b95440d[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: Chase Whiteside <chasesbank@gmail.com>
Date:   Sat Feb 2 00:15:46 2019 -0500

    commit

[1mdiff --git a/components/code-snippet-accordion-component.vue b/components/code-snippet-accordion-component.vue[m
[1mindex 5233f45..cccfc1e 100644[m
[1m--- a/components/code-snippet-accordion-component.vue[m
[1m+++ b/components/code-snippet-accordion-component.vue[m
[36m@@ -24,7 +24,7 @@[m
         :aria-hidden="`${!expanded}`"[m
         v-show="expanded"[m
         >[m
[31m-          <p>Defintion List lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aliquam laudantium eum laborum maiores natus alias, delectus impedit eos. At voluptatibus molestias tempore dicta, incidunt voluptatem sequi enim tenetur pariatur.</p>[m
[32m+[m[32m          <div v-html="item.__content"></div>[m
         </dd>[m
     </transition>[m
   </div>[m
[36m@@ -120,7 +120,7 @@[m [mdt {[m
 [m
 dd {[m
   margin-left: 0;[m
[31m-  padding: 3vw 2vw 4vw 2vw;[m
[32m+[m[32m  padding: 2rem 0 3rem 0;[m
   [m
   backface-visibility: hidden;[m
   font-smoothing: antialiased;[m
[1mdiff --git a/components/codes-component.vue b/components/codes-component.vue[m
[1mindex d1f5c14..7ff991c 100644[m
[1m--- a/components/codes-component.vue[m
[1m+++ b/components/codes-component.vue[m
[36m@@ -8,6 +8,7 @@[m
     <article v-for="post in codes" :key="post.title" class="colcade-item code-post">[m
       <span class="post-title">{{ post.title }}</span>[m
       <p>Lorem this is an example of a post description.</p>[m
[32m+[m[32m      <nuxt-link :to="'/notes/codes/' + post.title"></nuxt-link>[m
     </article>[m
 [m
     <dl>[m
[36m@@ -69,6 +70,7 @@[m [mexport default {[m
 }[m
 [m
 .code-post {[m
[32m+[m[32m  position: relative;[m
   background-color: rgba(0,0,0,.5);[m
   padding: 1rem;[m
   box-shadow: 0 1rem 1.5rem -1rem rgba(7, 57, 72, .25);[m
[36m@@ -86,4 +88,12 @@[m [mp {[m
   margin-bottom: 0;[m
   margin-top: 0;[m
 }[m
[32m+[m
[32m+[m[32ma {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 100%;[m
[32m+[m[32m}[m
 </style>[m
\ No newline at end of file[m
[1mdiff --git a/pages/contact.vue b/pages/contact.vue[m
[1mindex 96de23f..72e4084 100644[m
[1m--- a/pages/contact.vue[m
[1m+++ b/pages/contact.vue[m
[36m@@ -21,7 +21,7 @@[m [mexport default {[m
   mixins: [pageMixin],[m
 [m
   meta: {[m
[31m-    depth: 3[m
[32m+[m[32m    depth: 2[m
   },[m
 [m
   components: {[m
[1mdiff --git a/pages/notes/codes/_code.vue b/pages/notes/codes/_code.vue[m
[1mindex e69de29..30c8640 100644[m
[1m--- a/pages/notes/codes/_code.vue[m
[1m+++ b/pages/notes/codes/_code.vue[m
[36m@@ -0,0 +1,103 @@[m
[32m+[m[32m<template>[m
[32m+[m[32m  <main class="container">[m
[32m+[m[32m    <div class="content">[m
[32m+[m[32m      <h1><span>{{ thisPost.title.split(' ')[0] }}</span><span>{{ thisPost.title.split(' ').pop() }}</span></h1>[m
[32m+[m[41m    [m
[32m+[m[32m      <dl v-if="thisPost.type == 'cheatsheet'" class="code-snippets">[m
[32m+[m[32m        <code-snippet-accordion-component v-for="snippet in snippets" :key="snippet.slug" :item="snippet" />[m
[32m+[m[32m      </dl>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  </main>[m
[32m+[m[32m</template>[m
[32m+[m
[32m+[m[32m<script>[m
[32m+[m[32mimport pageMixin from '~/mixins/page-mixin.vue'[m
[32m+[m
[32m+[m[32mconst posts = {};[m
[32m+[m[32mconst reqPosts = require.context('@/pages/notes/codes/', false, /\.md$/);[m
[32m+[m
[32m+[m[32mreqPosts.keys().forEach((key) => {[m
[32m+[m[32m  posts[key] = reqPosts(key)[m
[32m+[m[32m})[m
[32m+[m
[32m+[m[32mconst snippets = {};[m
[32m+[m[32mconst reqSnippets = require.context('@/pages/notes/codes/snippets', true, /\.md$/);[m
[32m+[m
[32m+[m[32mreqSnippets.keys().forEach((key) => {[m
[32m+[m[32m  snippets[key] = reqSnippets(key)[m
[32m+[m[32m})[m
[32m+[m
[32m+[m[32mimport CodeSnippetAccordionComponent from '~/components/code-snippet-accordion-component.vue'[m
[32m+[m
[32m+[m[32mexport default {[m
[32m+[m[32m  mixins: [pageMixin],[m
[32m+[m
[32m+[m[32m  meta: {[m
[32m+[m[32m    depth: 3[m
[32m+[m[32m  },[m
[32m+[m
[32m+[m[32m  components: {[m
[32m+[m[32m    CodeSnippetAccordionComponent[m
[32m+[m[32m  },[m
[32m+[m
[32m+[m[32m  data: () => ({[m
[32m+[m[41m    [m
[32m+[m[32m  }),[m
[32m+[m
[32m+[m[32m  computed: {[m
[32m+[m[32m    posts() {[m
[32m+[m[32m      return this.getPosts(posts)[m
[32m+[m[32m    },[m
[32m+[m
[32m+[m[32m    thisPost() {[m
[32m+[m[32m      let thisCode = this.posts.find(code => code.title == this.$route.params.code)[m
[32m+[m
[32m+[m[32m      return thisCode[m
[32m+[m[32m    },[m
[32m+[m
[32m+[m[32m    title() {[m
[32m+[m[32m      return this.thisPost.title[m
[32m+[m[32m    },[m
[32m+[m
[32m+[m[32m    snippets() {[m[41m [m
[32m+[m[32m      if (this.thisPost.type == 'cheatsheet') {[m
[32m+[m[32m        let category = this.thisPost.title.split(' ')[0].toLowerCase()[m
[32m+[m
[32m+[m[32m        return this.getPosts(snippets).filter(snippet => (snippet.category.toLowerCase() == category))[m
[32m+[m[32m      }[m
[32m+[m[32m    }[m
[32m+[m[32m  },[m
[32m+[m
[32m+[m[32m  methods: {[m
[32m+[m[32m    getPosts(list) {[m
[32m+[m[32m      const postArray = [];[m
[32m+[m
[32m+[m[32m      Object.keys(list).forEach((key) => {[m
[32m+[m[32m        const post = list[key][m
[32m+[m
[32m+[m[32m        postArray.push(post);[m
[32m+[m[32m      });[m
[32m+[m
[32m+[m[32m      return postArray[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m</script>[m
[32m+[m
[32m+[m[32m<style lang="scss" scoped>[m
[32m+[m[32m.code-snippets {[m
[32m+[m[32m  // background-color: lightblue;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  // align-items: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/deep/ dt {[m
[32m+[m[32m  // background: red;[m
[32m+[m[32m  // flex: 1;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  max-width: 45rem;[m
[32m+[m[32m  margin-left: auto;[m
[32m+[m[32m  margin-right: auto;[m
[32m+[m[32m}[m
[32m+[m[32m</style>[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/css.md b/pages/notes/codes/css.md[m
[1mindex 357e55e..5c1f77d 100644[m
[1m--- a/pages/notes/codes/css.md[m
[1m+++ b/pages/notes/codes/css.md[m
[36m@@ -1,4 +1,5 @@[m
 ---[m
 title: CSS Cheatsheet[m
 description: A list of useful patterns[m
[32m+[m[32mtype: cheatsheet[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/html.md b/pages/notes/codes/html.md[m
[1mindex aa52970..7436c55 100644[m
[1m--- a/pages/notes/codes/html.md[m
[1m+++ b/pages/notes/codes/html.md[m
[36m@@ -1,4 +1,5 @@[m
 ---[m
 title: HTML[m
[31m-description: [m
[32m+[m[32mdescription:[m
[32m+[m[32mtype: cheatsheet[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/js.md b/pages/notes/codes/js.md[m
[1mindex 210db57..8c9d08f 100644[m
[1m--- a/pages/notes/codes/js.md[m
[1m+++ b/pages/notes/codes/js.md[m
[36m@@ -1,4 +1,5 @@[m
 ---[m
 title: JS[m
 description: [m
[32m+[m[32mtype: cheatsheet[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/snippets/css/color-variable-map.md b/pages/notes/codes/snippets/css/color-variable-map.md[m
[1mindex 93a58b0..533d18d 100644[m
[1m--- a/pages/notes/codes/snippets/css/color-variable-map.md[m
[1m+++ b/pages/notes/codes/snippets/css/color-variable-map.md[m
[36m@@ -3,12 +3,70 @@[m [mlayout: code[m
 title: Color Variable Map[m
 description: Use SASS maps for managing color variables[m
 created: 2016-11-21[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
 [m
 This is a useful mixin for referencing some centralized color variables in a SASS Map. The nesting nature of the map also helps encourage more clear standards for color variations.[m
 [m
 I learned this technique from [Jake Albaugh](http://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps).[m
 [m
[31m-<p data-height="300" data-theme-id="26404" data-slug-hash="oYZPvg" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Color Variable Map" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/oYZPvg/">Color Variable Map</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>[m
[31m-<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>[m
\ No newline at end of file[m
[32m+[m[32m<div[m[41m [m
[32m+[m[32m  class="codepen"[m[41m [m
[32m+[m[32m  data-prefill='{[m
[32m+[m[32m    "title": "React Basics Demo",[m
[32m+[m[32m    "description": "Shows how to use React and React DOM to render a module with props onto the page",[m
[32m+[m[32m    "tags": ["react", "react-docs-demo"],[m
[32m+[m[32m    "html_classes": ["loading", "no-js"],[m
[32m+[m[32m    "head": "&lt;meta name=&#x27;viewport&#x27; content=&#x27;width=device-width, initial-scale=1&#x27;&gt;",[m
[32m+[m[32m    "stylesheets": "https://unpkg.com/normalize.css@8.0.1/normalize.css",[m
[32m+[m[32m    "scripts": ["https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js", "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"][m
[32m+[m[32m  }'[m
[32m+[m[32m  style="height: 400px; overflow: auto;"[m
[32m+[m[32m  data-height="400"[m[41m [m
[32m+[m[32m  data-theme-id="31205"[m
[32m+[m[32m  data-default-tab="js,result"[m[41m [m
[32m+[m[32m  data-editable="true"[m[41m     [m
[32m+[m[32m  style="height: 400px; overflow: auto;"[m
[32m+[m[32m>[m
[32m+[m[32m  <pre data-lang="html">[m
[32m+[m[32m    &lt;div id="root"&gt;&lt;/div&gt;[m
[32m+[m[32m  </pre>[m
[32m+[m[32m  <pre data-lang="scss">[m
[32m+[m[32m    $gray: #ccc;[m
[32m+[m[32m    body {[m
[32m+[m[32m      background: $gray;[m
[32m+[m[32m      margin: 0;[m
[32m+[m[32m      padding: 1rem;[m
[32m+[m[32m    }[m
[32m+[m[32m    .module {[m
[32m+[m[32m      background: white;[m
[32m+[m[32m      padding: 1rem;[m
[32m+[m[32m      border-radius: 4px;[m
[32m+[m[32m      border: 1px solid #999;[m
[32m+[m[32m      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);[m
[32m+[m[32m      h1 {[m
[32m+[m[32m        margin: 0 0 1rem 0;[m
[32m+[m[32m      }[m
[32m+[m[32m    }[m
[32m+[m[32m  </pre>[m
[32m+[m[32m  <pre data-lang="babel">[m
[32m+[m[32m    class Welcome extends React.Component {[m
[32m+[m[32m      render() {[m
[32m+[m[32m        return &lt;div class="module"&gt;[m
[32m+[m[32m          &lt;h1&gt;[m
[32m+[m[32m            Hello, {this.props.name}[m
[32m+[m[32m          &lt;/h1&gt;[m
[32m+[m[32m          &lt;p&gt;It's a good day to build websites.&lt;/p&gt;[m
[32m+[m[32m        &lt;/div&gt;;[m
[32m+[m[32m      }[m
[32m+[m[32m    }[m
[32m+[m[32m    ReactDOM.render([m
[32m+[m[32m      &lt;Welcome name="Chris"&gt;&lt;/Welcome&gt;,[m
[32m+[m[32m      document.getElementById('root')[m
[32m+[m[32m    );[m
[32m+[m[32m  </pre>[m
[32m+[m[32m</div>[m
[32m+[m[32m<script async src="https://static.codepen.io/assets/embed/ei.js"></script>[m
[32m+[m
[32m+[m[32m<!-- <p data-height="300" data-theme-id="26404" data-slug-hash="oYZPvg" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Color Variable Map" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/oYZPvg/">Color Variable Map</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>[m
[32m+[m[32m<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> -->[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/snippets/css/dead-center.md b/pages/notes/codes/snippets/css/dead-center.md[m
[1mindex b945a98..fe664e4 100644[m
[1m--- a/pages/notes/codes/snippets/css/dead-center.md[m
[1m+++ b/pages/notes/codes/snippets/css/dead-center.md[m
[36m@@ -3,7 +3,7 @@[m [mlayout: code[m
 title: Dead Center[m
 description: Centers everything horizontaly & vertically.[m
 created: 2015-12-13[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
 [m
 Great for quick test/demos, so you can pull whatever *thing* you're working on out from the corner, and drop it right in the middle, where it looks nicer anyway.[m
[1mdiff --git a/pages/notes/codes/snippets/css/fix-the-crazy-box-model.md b/pages/notes/codes/snippets/css/fix-the-crazy-box-model.md[m
[1mindex 435c552..ff1d1df 100644[m
[1m--- a/pages/notes/codes/snippets/css/fix-the-crazy-box-model.md[m
[1m+++ b/pages/notes/codes/snippets/css/fix-the-crazy-box-model.md[m
[36m@@ -3,7 +3,7 @@[m [mlayout: code[m
 title: Fix the Crazy CSS Model[m
 description: Set everything to border-box, but let modular layouts easily overwrite it.[m
 created: 2015-12-10[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
 [m
 This changes borders and padding to inset, so they don't add dimention to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.[m
[1mdiff --git a/pages/notes/codes/snippets/css/responsive-inversion.md b/pages/notes/codes/snippets/css/responsive-inversion.md[m
[1mindex 2e68b4d..0bbd278 100644[m
[1m--- a/pages/notes/codes/snippets/css/responsive-inversion.md[m
[1m+++ b/pages/notes/codes/snippets/css/responsive-inversion.md[m
[36m@@ -3,5 +3,5 @@[m [mlayout: code[m
 title: Responsive Inversion[m
 description: [m
 created: 2015-12-10[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/snippets/css/responsive-typography.md b/pages/notes/codes/snippets/css/responsive-typography.md[m
[1mindex 58d1457..fd66a03 100644[m
[1m--- a/pages/notes/codes/snippets/css/responsive-typography.md[m
[1m+++ b/pages/notes/codes/snippets/css/responsive-typography.md[m
[36m@@ -3,5 +3,5 @@[m [mlayout: code[m
 title: Responsive Typography[m
 description: [m
 created: 2015-12-10[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/snippets/css/squircle-mixin.md b/pages/notes/codes/snippets/css/squircle-mixin.md[m
[1mindex b7e6f2b..d3d72f8 100644[m
[1m--- a/pages/notes/codes/snippets/css/squircle-mixin.md[m
[1m+++ b/pages/notes/codes/snippets/css/squircle-mixin.md[m
[36m@@ -3,5 +3,5 @@[m [mlayout: code[m
 title: Squircle Mixin[m
 description: [m
 created: 2015-12-10[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/snippets/css/viewport-width-minus-scrollbar.md b/pages/notes/codes/snippets/css/viewport-width-minus-scrollbar.md[m
[1mindex 2ccfdaf..2e8bfe8 100644[m
[1m--- a/pages/notes/codes/snippets/css/viewport-width-minus-scrollbar.md[m
[1m+++ b/pages/notes/codes/snippets/css/viewport-width-minus-scrollbar.md[m
[36m@@ -3,5 +3,5 @@[m [mlayout: code[m
 title: Viewport Width Minus Scrollbar[m
 description: [m
 created: 2015-12-10[m
[31m-category: codes[m
[32m+[m[32mcategory: css[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/notes/codes/vue.md b/pages/notes/codes/vue.md[m
[1mindex 7971d5d..0600252 100644[m
[1m--- a/pages/notes/codes/vue.md[m
[1m+++ b/pages/notes/codes/vue.md[m
[36m@@ -1,4 +1,5 @@[m
 ---[m
 title: Vue[m
 description: [m
[32m+[m[32mtype: cheatsheet[m
 ---[m
\ No newline at end of file[m
[1mdiff --git a/pages/portfolio/_project.vue b/pages/portfolio/_project.vue[m
[1mindex dd5cfad..ffd3ac9 100644[m
[1m--- a/pages/portfolio/_project.vue[m
[1m+++ b/pages/portfolio/_project.vue[m
[36m@@ -13,16 +13,13 @@[m
 </template>[m
 [m
 <script>[m
[31m-// import metaInfo from '@/mixins/meta-info.vue'[m
[32m+[m[32mimport pageMixin from '~/mixins/page-mixin.vue'[m
 [m
[31m-// const projects = {};[m
[31m-// const req = require.context('./', false, /\.md$/);[m
[31m-// req.keys().forEach((key) => {[m
[31m-//   projects[key] = req(key);[m
[31m-// });[m
[31m-[m
[31m-// import Header from '~/components/Header'[m
[31m-// import Footer from '~/components/Footer'[m
[32m+[m[32mconst projects = {};[m
[32m+[m[32mconst req = require.context('./', false, /\.md$/);[m
[32m+[m[32mreq.keys().forEach((key) => {[m
[32m+[m[32m  projects[key] = req(key);[m
[32m+[m[32m});[m
 [m
 export default {[m
   // components: {[m
[36m@@ -42,36 +39,36 @@[m [mexport default {[m
   //   depth: 3[m
   // },[m
 [m
[31m-  // computed: {[m
[31m-  //   styles() {[m
[31m-  //     return {[m
[31m-  //       // 'background-color': this.thisArticle.colorBackground[m
[31m-  //     }[m
[31m-  //   },[m
[31m-  //   projects() {[m
[31m-  //     const projectArray = [];[m
[32m+[m[32m  computed: {[m
[32m+[m[32m    // styles() {[m
[32m+[m[32m    //   return {[m
[32m+[m[32m    //     // 'background-color': this.thisArticle.colorBackground[m
[32m+[m[32m    //   }[m
[32m+[m[32m    // },[m
[32m+[m[32m    // projects() {[m
[32m+[m[32m    //   const projectArray = [];[m
       [m
[31m-  //     Object.keys(projects).forEach((key) => {[m
[31m-  //       const project = projects[key];[m
[31m-  //       project.slug = key.replace('./', '').replace('.md', '');[m
[31m-  //       projectArray.push(project);[m
[31m-  //     });[m
[32m+[m[32m    //   Object.keys(projects).forEach((key) => {[m
[32m+[m[32m    //     const project = projects[key];[m
[32m+[m[32m    //     project.slug = key.replace('./', '').replace('.md', '');[m
[32m+[m[32m    //     projectArray.push(project);[m
[32m+[m[32m    //   });[m
       [m
[31m-  //     return projectArray;[m
[31m-  //   },[m
[31m-  //   thisProject() {[m
[31m-  //     return this.projects.find(project => project.slug == this.$route.params.project)[m
[31m-  //   },[m
[31m-  //   thisProjectTitle() {[m
[31m-  //     return this.thisProject.toString()[m
[31m-  //   },[m
[31m-  //   color() {[m
[31m-  //     return this.thisProject.colorBackground[m
[31m-  //   },[m
[31m-  //   title() {[m
[31m-  //     return this.thisProject.title + ' Project'[m
[31m-  //   }[m
[31m-  // },[m
[32m+[m[32m    //   return projectArray;[m
[32m+[m[32m    // },[m
[32m+[m[32m    // thisProject() {[m
[32m+[m[32m    //   return this.projects.find(project => project.slug == this.$route.params.project)[m
[32m+[m[32m    // },[m
[32m+[m[32m    // thisProjectTitle() {[m
[32m+[m[32m    //   return this.thisProject.toString()[m
[32m+[m[32m    // },[m
[32m+[m[32m    // color() {[m
[32m+[m[32m    //   return this.thisProject.colorBackground[m
[32m+[m[32m    // },[m
[32m+[m[32m    // title() {[m
[32m+[m[32m    //   return this.thisProject.title + ' Project'[m
[32m+[m[32m    // }[m
[32m+[m[32m  },[m
 }[m
 </script>[m
 [m
