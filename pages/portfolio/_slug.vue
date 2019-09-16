<template>
  <main class="container" :class="`${this.$route.params.slug}-project`">
    <div class="project-header"></div>

    <div class="content">
      <h1><span>{{ title }}</span><span>{{ description }}</span></h1>

      <ul class="project-highlights">
        <li v-for="(hl, index) in projectHighlights" :key="index">{{ hl }}</li>
      </ul>
      
      <no-ssr>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponentLoader" />
      </no-ssr>
    </div>
  </main>
</template>

<script lang="js">
import pageMixin from '~/mixins/page-mixin.vue'

import DynamicMarkdown from "~/components/DynamicMarkdown.vue"

export default {
  async asyncData ({params, app}) {
    const fileContent = await import(`~/pages/portfolio/${params.slug}.md`),
          attr = fileContent.attributes

    return {
      ...attr,
      // name: params.slug,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns,
    }
  },

  // data() {
  //   return {
  //     // title: 'Project'
  //   }
  // },

  components: {
    DynamicMarkdown,
  },

  mixins: [pageMixin],

  meta: {
    depth: 3
  },

  computed: {
    // styles() {
    //   return {
    //     // 'background-color': this.thisArticle.colorBackground
    //   }
    // },
    // projects() {
    //   const projectArray = [];
      
    //   Object.keys(projects).forEach((key) => {
    //     const project = projects[key];
    //     project.slug = key.replace('./', '').replace('.md', '');
    //     projectArray.push(project);
    //   });
      
    //   return projectArray;
    // },

    // thisProject() {
    //   return this.projects.find(project => project.slug == this.$route.params.slug)
    // },
    // thisProjectTitle() {
    //   return this.thisProject.toString()
    // },
    // color() {
    //   return this.thisProject.colorBackground
    // },

    pageTitle() {
      return this.title + ' Project'
    },

    extraComponentLoader () {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/components/${this.extraComponent}.vue`)
    }
  },
}
</script>

<style lang="scss" scoped>
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

// main {
//   background-color: lightseagreen;
// }

h1 {
  margin-bottom: 0;

  span:nth-child(2) {
    line-height: .9;
    margin-top: -.5em;
  }
}




.content ::v-deep {
  .project-highlights {
    font-family: 'Montserrat',Arial,Helvetica,sans-serif;
    font-size: 1.25rem;
    line-height: 1.5;
    max-width: calc(25rem + 10vw);
    margin-top: 3.5rem;
    margin-bottom: 0rem;
    //same as h2/h3
    @include responsive-property("padding-left", calc(15% - #{$mainPadding}), calc(25% - #{$mainPadding}));

    li + li {
      margin-top: 1rem;
    }
  }

  ul li::before {
    content: "\25FC";
    font-size: .75em;
    font-weight: bold;
    display: inline-block;
        width: 2em;
    margin-left: -2em;
    position: relative;
    top: -.1em;
  }

  h3 {
    display: flex;
    align-items: baseline;

    &:after {
      bottom: .23em;
      flex-grow: 1;
      margin-left: -.3em;
      content: '';
      height: 1px;
      border-radius: .05em;
      align-self: baseline;
    }
  }
}




@mixin projectColors(
  $text: #d2f8ff,
  $highlight: #00d8ff,
  $light: #d2f8ff,
  $mid: #70bfce,
  $dark: #2d6b77,
  $darker: #1a4850,
  $background: #0b151d
) {

  background: $background;
  text-shadow: 1rem 1rem 1rem red;

  header:before {
    background: $background;
  }

  .icon--back {
    fill: $mid
  }

  .back {
    color: $light
  }

  .back-content--wrap {
    color: $mid
  }

  h1 span:first-child,
  h2 span:first-child {
    color: $light;
    text-shadow: 0.02em 0.05em 0.08em rgba(darken($light,25%),.5);

    &:before {
      background-color: $highlight;
      opacity: .8
    }
  }

  h1 span:nth-child(2),
  h2 span:nth-child(2) {
    color: $mid;
    // text-shadow: 0 0.05em 0.15em rgba(darken($mid,40%),.5);
    text-shadow: none;
  }

  h3,
  h4 {
    color: $dark;
    text-shadow: 0 0.05em 0.15em rgba(darken($dark,40%),.5)
  }

  p {
    color: $text;
    text-shadow: 0 0.05em 0.15em rgba(darken($text,40%),.5)
  }
}

::v-deep .project-highlights {
  margin-top: 2.25rem;
}

.walk-on-water {
  @include projectColors(
    $text: #547171,
    $highlight: white,
    $light: #f82945,
    $mid: #00b3b5,
    $dark: #2d6b77,
    $darker: #1a4850,
    $background: #ede4df
  );

  padding-top: 50%;

  h1 {
    text-align: right;
  }

  @media (min-width: $smallScreen) {
    padding-top: 38%;

    h1 {
      text-align: initial;
    }
  }

  h3,
  h4,
  p {
    text-shadow: none;
  }

  // &.container {
  //   background: white url(http://cha.se.net/portfolio/walk-on-water/project-hero-new.jpg);
  //   background-size: 100% auto;
  //   background-repeat: no-repeat;
  //   padding-top: 30%;
  // }
}

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