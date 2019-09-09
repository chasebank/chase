<template>
  <transition name="transition--navigation-">
    <nav class=""
          :class="[{'content-scrolled' : contentScrolled}, `${this.$route.params.slug}-navigation`]"
          v-show="navVisible">
      <a href="#" id="back" @click.prevent="goBack">
        <svg id="icon--back" xmlns="http://www.w3.org/2000/svg" width="19" height="24.665" viewBox="0 0 19 24.665"><path d="M18.779 22.529L5.205 15.003l13.574-8.225V0L-.114 12.467v1.885l18.893 10.313z"/></svg>
        
        <span>BACK to&nbsp;</span>

        <transition-group name="route-characters-">
          <span
            v-for="(item, index) in previousRoute"
            v-bind:key="item + index"
            class="route-character"
          >
            {{ item }}
          </span>
        </transition-group>
      </a>

      <!-- <nuxt-link to="/" style="color: white; margin-left: 1rem">Home</nuxt-link>
      <nuxt-link to="/about" style="color: white; margin-left: 1rem">About</nuxt-link>
      <nuxt-link to="/contact" style="color: white; margin-left: 1rem">Contact</nuxt-link>
      <nuxt-link to="/notes/codes/" style="color: white; margin-left: 1rem">Codes</nuxt-link>
      <nuxt-link to="/portfolio" style="color: white; margin-left: 1rem">Portfolio</nuxt-link> -->

      <h2 class="nav--small-name"><span><nuxt-link :to="{ name: 'index'}" class="page-link">CHASE</nuxt-link></span><span><nuxt-link :to="{ name: 'index'}" class="page-link">WHITESIDE</nuxt-link></span></h2>
    </nav>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    navVisible: false
  }),

  watch: {
    'contentScrolled' () {
      this.navVisible = this.contentScrolled || this.$route.name !== 'index' ? true : false
    },

    '$route' () {
      // need to use watchers and mounted hook rather than single computed prop
      // fixes a flash that was happening when navigating back to scrolled index
      // nav would hide from index but THEN get scroll and flash back into visible
      // this holds the route based logic until page has already loaded (with scroll)
      this.$nextTick(() => {
        this.navVisible = this.contentScrolled || this.$route.name !== 'index' ? true : false
      })
    }
  },

  mounted() {
    this.navVisible = this.$route.name !== 'index' ? true : false
  },

  computed: {
    ...mapState([
      "contentScrolled",
      "routeHistory"
    ]),

    navTransition() {
      if (this.$route.name == 'index') {
        return 'back-slide-down-'
      } else {
        return 'back-slide-right-'
      }
    },

    previousRoute() {
      let msg = 'Home'

      if (this.routeHistory.length > 1) msg = this.routeHistory[this.routeHistory.length - 2]

      if (this.contentScrolled) msg = "top"
      
      return msg.split('')
    },
  },

  methods: {
    goBack() {
      if (!this.contentScrolled && this.$route.name != 'index') {
        if (this.routeHistory.length > 0) {

          this.$router.go(-1)

        } else {

          this.$router.push({ name: 'index'})

        }
        
        this.$store.commit('removeRouteTitleFromHistory')

      } else {
        // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

      }
    },
  }
}
</script>

<style lang="scss" scoped>

nav {
  // background: linear-gradient(to top, rgba(#0b151d,0), rgba(black,1) );
  position: fixed;
  top: 0;
  width: 100vw;
  width: $fullWidth;
  height: $navHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include responsive-property("padding-left", 2vw, 20vw);
  @include responsive-property("padding-right", 2vw, 20vw);
  z-index: 999;
    
  @media (max-width: 400px) {
    padding-left: 1rem;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -80%;
    left: 0;
    width: 100%;
    height: 150%;
    background-color: black;
    border-radius: 40%;
    z-index: -2;
    transform: translateY(-25%);
    filter: blur(1rem);
    transition: top $transitionDurationForDebugging ease-in-out;
  }
  
  &.content-scrolled {
    &:before {
      top: -50%;
    }
    
    #icon--back {
      transform: rotateZ(90deg) rotateX(180deg);
    }
  }
}

.transition--navigation--enter-active,
.transition--navigation--leave-active {
  transition: transform $transition
}

.transition--navigation--enter,
.transition--navigation--leave-to {
  transform: translate3d(0,-100%,0px)
}

#back {
  // background-color: yellow;
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  color: #d2f8ff;
  text-decoration: none;
  position: absolute;
  position: relative!important;
}
.back-content--wrap {
  // background-color: green;
  padding-left: .275em;
  // height: $headerHeight;
}
.back-content {
  background-color: green;
  // position: absolute;
  // top: 0;
  // height: $headerHeight;
  // width: 100px;
  // line-height: $headerHeight;
  // display: flex;
  // align-items: center;
}
#icon--back {
  margin-right: .4rem;
  fill: #70bfce;
  transition: transform .8s cubic-bezier(0.72,-0.51, 0.25, 1)
}
.nav--small-name {
  font-size: 1.5rem;
  margin-top: .2rem;
  margin-bottom: 0;
  padding-left: 0;
  span:nth-child(2) {
    &:after {
      display: none;
    }
  }
  
  @media (max-width: 400px) {
    // span:nth-child(2) {
      display: none;
    // }
  }
}
.transition--character-enter-active,
.transition--character-leave-active {
  transition: opacity 1s, color 1s, text-shadow 1s;
}
.transition--character-enter,
.transition--character-leave-to {
  opacity: 0;
}
.transition--character-enter {
  color: cyan;
  text-shadow: 0 0 1.5rem cyan;
}
#previous-route {
  // background-color: magenta;
  position: relative;
  transition: all .5s;
}
.route-character {
  transition: opacity 1s, transform 1s, color 1s;
  display: inline-block;
  min-width: .3rem;
}
.route-characters--enter {
  opacity: 0;
  transform: translate3d(.5rem,0,0);
}
.route-characters--leave-to {
  opacity: 0;
  transform: translate3d(-.5rem,0,0);
}
.route-characters--leave-active {
  position: absolute;
  color: cyan;
}
</style>
