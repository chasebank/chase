<template>
  <section class="portfolio">
    <ul id="portfolio--projects">
      <li v-for="project in projects" :key="project.slug" class="portfolio--project" :class="'project--' + project.slug">
        <img :src="require(`../assets/images/projects/${project.slug}/project-thumb.jpg?disabled`)" alt="" class="portfolio--project-thumb">

        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title"><nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}">{{ project.title }}</nuxt-link></h3>
          <h4 class="portfolio--project-description"><nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}">{{ project.description }}</nuxt-link></h4>
        </div>

        <nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}" class="portfolio--project-link"></nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
// const projects = {};
// const req = require.context('@/pages/portfolio/', false, /\.md$/);

// req.keys().forEach((key) => {
//   projects[key] = req(key);
// });

// import projects from '~/pages/portfolio/list.js'

export default {
  // async asyncData ({app}) {
  //   console.log('testing async')
  //   async function asyncImport (slug) {
  //     const wholeMD = await import(`~/pages/portfolio/${slug}.md`)
  //     // return {
  //     //   ...wholeMD.attributes,
  //     //   slug: slug,
  //     //   image: 'test-iamge'
  //     // }
  //     return wholeMD.attributes
  //   }

  //   return Promise.all(projects.map(project => asyncImport(project)))
  //   .then((res) => {
      
  //     console.log(res)
  //     return {
  //       projects: res
  //     }
  //   })
  // },
  props: {
    projects: {
      type: Array
    }
  },
  computed: {
    // projects() {
    //   const projectArray = [];
      
    //   Object.keys(projects).forEach((key) => {
    //     const project = projects[key],
    //           slug = key.replace('./', '').replace('.md', '');

    //     project.slug = slug
    //     project.image = require('~/assets/portfolio-assets/' + slug + '/project-thumb.jpg')

    //     projectArray.push(project);
    //   });
      
    //   return projectArray.sort( (firstProject, secondProject) => firstProject.created < secondProject.created ? 1 : -1 );
    // }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.portfolio {
  @include full-width;
}

#portfolio--projects {
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-bottom: 1rem;
  margin-bottom: 0;
  max-width: initial;
  
  @media (min-width: $smallScreen) {
    padding-right: 2vw;
  }
}

.portfolio--project {
  background-color: #000c16;
  position: relative;
  border-radius: 3.1rem;
  perspective: 100px;
  margin-bottom: calc(#{$mainPadding} * 1.75);
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  $width: 10rem;
  width: $width;
  height: calc(#{$width} * 1.8);
  
  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    height: 100%;
    border-radius: inherit;
    transform: rotateX(2deg);
    transform-origin: center bottom;
    z-index: -1;
  }

  &:before {
    left: 0;
    width: $width;
  }

  &:after {
    left: 5%;
    width: 90%;
    height: 50%;
  }
  
  @media (max-width: $smallScreen) {
    margin-bottom: 2rem;
    
    &:nth-child(2n) {
      margin-top: 4rem!important;
    }
  }
  
  @media (min-width: $largeScreen) {    
    &:nth-child(2n) {
      transform: translateY(4rem);
    }
  }
  
  @media (max-width: $largeScreen) {
    margin-left: 5%;
    margin-right: 5%
  }
}

.portfolio--project-thumb {
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  width: 100%;
  @include squircle(56);
}

// .portfolio--project-thumb {
//   fill: red;
//   display: block;
//   width: 8rem;
//   height: auto;
  
//   @media (max-width: $smallScreen) {
//     width: 10rem;
//   }
// }

.portfolio--project-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.portfolio--project-info {
  // background-color: red;
  position: absolute;
  top: 94%;
  right: -2vw;
  width: 115%;
}

.portfolio--project-title {
  // background-color: yellow;
  position: relative;
  left: -20%;
  color: white;
  margin-top: 0;
  margin-bottom: .25em;
  font-size: 2.5rem;
  line-height: .6;
  text-align: right;
  width: 120%;
}

.portfolio--project-description {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10%;
  text-align: right;
  font-size: 1rem;
  font-family: 'Montserrat',Arial,Helvetica,sans-serif;
  line-height: 1;
}

@mixin projectStyles($dark,$light) {
  &:before {
    background-color: $dark;
    filter: drop-shadow(0 0 1rem saturate(lighten($dark,10%),10%));
  }

  &:after {
    background-color: $dark;
    filter: drop-shadow(0 0 .5rem $light);
  }
  
  .portfolio--project-description { color: $light }
}


.project--price-log {
  @include projectStyles(#03925c,#00cc82);
}
.project--walk-on-water {
  @include projectStyles(#574d8e,#f1c4aa);
}
.project--aau {
  @include projectStyles(#075788,#27f4fd);
}
.project--feastbeast {
  @include projectStyles(#653d3d,#fc4141);
}
.project--officemax-office-depot {
  @include projectStyles(#949297,#918d94);
}
.project--pga {
  @include projectStyles(#385118,#9ace38);
}

</style>