<template>
  <div class="portfolio">
    <ul id="portfolio--projects">
      <li v-for="project in projects" :key="project.slug" class="portfolio--project" :class="'project--' + project.slug">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb" preserveAspectRatio="xMidYMax meet">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" x="-9%" preserveAspectRatio="none" clip-path="url(#project-mask)" :xlink:href="project.image"/>
        </svg>

        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title"><nuxt-link :to="{ name: 'portfolio-project', params: { project: project.slug }}">{{ project.title }}</nuxt-link></h3>
          <h4 class="portfolio--project-description"><nuxt-link :to="{ name: 'portfolio-project', params: { project: project.slug }}">{{ project.description }}</nuxt-link></h4>
        </div>

        <nuxt-link :to="{ name: 'portfolio-project', params: { project: project.slug }}" class="portfolio--project-link"></nuxt-link>
      </li>
    </ul>

    <!-- <ul id="portfolio--projects">
      <li class="portfolio--project project--price-log">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/project-thumb--price-log.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">Price Log</h3>
          <h4 class="portfolio--project-description">Product Design & Development</h4>
        </div>
      </li>
      <li class="portfolio--project project--walk-on-water">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="http://cha.se.net/portfolio/walk-on-water/project-thumb.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">Walk on Water</h3>
          <h4 class="portfolio--project-description">Graphic&nbsp;Design&nbsp;& Brand&nbsp;Development</h4>
        </div>
      </li>
      <li class="portfolio--project project--aau">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="http://cha.se.net/portfolio/aau/project-thumb.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">AAU</h3>
          <h4 class="portfolio--project-description">Graphic Design</h4>
        </div>
      </li>
      <li class="portfolio--project project--feastbeast">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="http://cha.se.net/portfolio/feastbeast-food-truck/project-thumb.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">FeastBeast Food&nbsp;Truck</h3>
          <h4 class="portfolio--project-description">Graphic Design &&nbsp;Branding</h4>
        </div>
      </li>
      <li class="portfolio--project project--omax">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="http://cha.se.net/portfolio/officemax-office-depot/project-thumb.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">OfficeMax / Office&nbsp;Depot</h3>
          <h4 class="portfolio--project-description">Graphic Design &&nbsp;Marketing</h4>
        </div>
      </li>
      <li class="portfolio--project project--pga">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 378" class="portfolio--project-thumb">
          <defs>
            <clipPath id="project-mask">
              <path d="M133.329 0H66.667C14.862.703.704 14.861 0 66.667v244.669C.704 363.139 14.862 377.301 66.667 378h66.663c51.806-.699 65.967-14.861 66.671-66.664V66.667C199.296 14.861 185.135.703 133.329 0z"/>
            </clipPath>
          </defs>

          <image class="portfolio--project-thumb--image" height="100%" width="100%" preserveAspectRatio="none" clip-path="url(#project-mask)" xlink:href="http://cha.se.net/portfolio/pga/project-thumb.jpg"/>
        </svg>
        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title">PGA</h3>
          <h4 class="portfolio--project-description">Graphic Design</h4>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
const projects = {};
const req = require.context('@/pages/portfolio/', false, /\.md$/);

req.keys().forEach((key) => {
  projects[key] = req(key);
});

export default {
  computed: {
    projects() {
      const projectArray = [];
      
      Object.keys(projects).forEach((key) => {
        const project = projects[key],
              slug = key.replace('./', '').replace('.md', '');

        project.slug = slug
        project.image = require('~/assets/portfolio-assets/' + slug + '/project-thumb.jpg')

        projectArray.push(project);
      });
      
      return projectArray.sort( (firstProject, secondProject) => firstProject.created < secondProject.created ? 1 : -1 );
    }
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
  // background-color: yellow;
  // position: relative;
  // left: calc(#{$mainPadding} * -1);
  // width: 100vw;
  // max-width:100%;
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // padding-bottom: 2rem;
  padding-left: 3vw;
  // padding-right: 2vw;
  
  @media (min-width: $smallScreen) {
    padding-right: 4vw;
  }
}

.portfolio--project {
  background-color: #000c16;
  position: relative;
  border-radius: 3rem;
  // box-shadow: 0 .4rem 1rem #000c16;
  // box-shadow: 0 .4rem .3rem -.1rem black;
  perspective: 100;
  margin-bottom: calc(#{$mainPadding} * 1.75);
  margin-left: 1vw;
  margin-right: 1vw;
  
  &:before {
    display: block;
    content: '';
    position: absolute;
    bottom: -.75rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transform: rotateX(2deg);
    transform-origin: center bottom;
    filter: blur(1rem);
    z-index: -1;
    opacity: .75;
  }
  
  @media (max-width: $smallScreen) {
    &:nth-child(2n) {
      
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
  fill: red;
  display: block;
  width: 8rem;
  height: auto;
  
  @media (max-width: $smallScreen) {
    width: 10rem;
  }
}

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
  margin-bottom: .1em;
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
}

@mixin projectStyles($dark,$light) {
  box-shadow: 0 .5rem 1rem -.25rem $light;
  
  &:before { background-color: $dark }
  
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