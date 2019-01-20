<template>
  <main class="container" :style="styles" :class="this.$route.params.project">
    <div class="content">
      <!-- <h1><span>{{ thisProject.title }}</span><span>{{ thisProject.description }}</span></h1> -->
      <!-- <ul>
        <li v-for="article in articles"><nuxt-link :to="{ name: 'posts-slug', params: { slug: article.slug }}">{{ article.slug }}</nuxt-link></li>
      </ul> -->
      <!-- <div class="post-body" v-html="thisProject.__content"></div> -->
    </div>

    <!-- <Footer/> -->
  </main>
</template>

<script>
// import metaInfo from '@/mixins/meta-info.vue'

// const projects = {};
// const req = require.context('./', false, /\.md$/);
// req.keys().forEach((key) => {
//   projects[key] = req(key);
// });

// import Header from '~/components/Header'
// import Footer from '~/components/Footer'

export default {
  // components: {
    // Header,
  //   // Footer
  // },

  // data() {
  //   return {
  //     // title: 'Project'
  //   }
  // },

  // mixins: [metaInfo],

  // meta: {
  //   depth: 3
  // },

  // computed: {
  //   styles() {
  //     return {
  //       // 'background-color': this.thisArticle.colorBackground
  //     }
  //   },
  //   projects() {
  //     const projectArray = [];
      
  //     Object.keys(projects).forEach((key) => {
  //       const project = projects[key];
  //       project.slug = key.replace('./', '').replace('.md', '');
  //       projectArray.push(project);
  //     });
      
  //     return projectArray;
  //   },
  //   thisProject() {
  //     return this.projects.find(project => project.slug == this.$route.params.project)
  //   },
  //   thisProjectTitle() {
  //     return this.thisProject.toString()
  //   },
  //   color() {
  //     return this.thisProject.colorBackground
  //   },
  //   title() {
  //     return this.thisProject.title + ' Project'
  //   }
  // },
}
</script>

<style lang="scss">
// @import '../../styles/_bitsnpieces.scss';
// .header--small-name span,
// .back,
// .back-content {
//   transition: color $transition
// }

// .container {
//   padding-left: $mainPadding;
//   padding-right: $mainPadding;
// }
// .project-header--large {
//   display: none;
// }

// @media (min-width: $smallScreen) {
//   .project-header--large {
//     display: block;
//   }

//   .project-header--mobile {
//     display: none;
//   }
// }

// @mixin projectColors(
//   $text: #d2f8ff,
//   $highlight: #00d8ff,
//   $light: #d2f8ff,
//   $mid: #70bfce,
//   $dark: #2d6b77,
//   $darker: #1a4850,
//   $background: #0b151d
// ) {

//   &.container {
//     background: $background;
//     // text-shadow: 1rem 1rem 1rem red;
//   }

//   header:before {
//     background: $background;
//   }

//   .icon--back {
//     fill: $mid
//   }

//   .back {
//     color: $light
//   }

//   .back-content--wrap {
//     color: $mid
//   }

//   h1,
//   h2 {
    
//   }

//   h1 span:first-child,
//   h2 span:first-child {
//     color: $light;
//     text-shadow: 0.02em 0.05em 0.08em rgba(darken($light,25%),.5);

//     &:before {
//       background-color: $highlight;
//       opacity: .8
//     }
//   }

//   h1 span:nth-child(2),
//   h2 span:nth-child(2) {
//     color: $mid;
//     // text-shadow: 0 0.05em 0.15em rgba(darken($mid,40%),.5);
//     text-shadow: none;
//   }

//   h3,
//   h4 {
//     color: $dark;
//     text-shadow: 0 0.05em 0.15em rgba(darken($dark,40%),.5)
//   }

//   p {
//     color: $text;
//     text-shadow: 0 0.05em 0.15em rgba(darken($text,40%),.5)
//   }
// }

// .walk-on-water {
//   @include projectColors(
//     $text: #547171,
//     $highlight: white,
//     $light: #f82945,
//     $mid: #00b3b5,
//     $dark: #2d6b77,
//     $darker: #1a4850,
//     $background: #ede4df
//   )

//   padding-top: 50%;

//   h1 {
//     text-align: right;
//   }

//   @media (min-width: $smallScreen) {
//     padding-top: 38%;

//     h1 {
//       text-align: initial;
//     }
//   }

//   h3,
//   h4,
//   p {
//     text-shadow: none;
//   }

//   // &.container {
//   //   background: white url(http://cha.se.net/portfolio/walk-on-water/project-hero-new.jpg);
//   //   background-size: 100% auto;
//   //   background-repeat: no-repeat;
//   //   padding-top: 30%;
//   // }
// }

// .pga {
//   @include projectColors(
//     $text: #e1ffd1,
//     $highlight: #002e4e,
//     $light: white,
//     $mid: #bb9f67,
//     $dark: #2d6b77,
//     $darker: #1a4850,
//     $background: #0b3229
//   )

//   padding-top: 35%;
// }

// .project-header {
//   position: absolute;
//   top: 2.5rem;
//   left: 0;
//   width: 100%;
//   z-index: -10;
// }
</style>