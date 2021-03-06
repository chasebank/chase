<template>
  <div id="app">
    <TheHeader/>

    <TheNavigation/>

    <div id="main-wrap" ref="mainWrap">
      <transition
        :name="$store.state.routeTransitionDirection"
        @after-enter="afterRouteEnter">
          <nuxt :key="$route.fullPath"/>
      </transition>
    </div>
    
    <TheFooter class="footer" ref="footer"/>
  </div>
</template>

<script>
import TheNavigation from '~/components/TheNavigation.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavigation,
    TheHeader,
    TheFooter
  },

  data: () => ({
    scroll_positions: {},
    leavingFooterTopCoord: 0
  }),

  created() {
    this.$router.beforeEach((to,from,next) => {
      let fromEl = this.$refs.mainWrap.querySelector(':first-child'),
          fromElScrollPosition = document.documentElement.scrollTop
      
      // lock width of leaving route
      fromEl.style.width = `${fromEl.offsetWidth}px`
      
      // save footerPosition for leaving route
      this.leavingFooterTopCoord = Math.round(this.$refs.footer.$el.getBoundingClientRect().top)
            
      next()
      
      this.$nextTick(() => {
        // fake scrollPosition of leaving route
        fromEl.style.position = 'fixed'
        fromEl.style.top = `-${fromElScrollPosition}px`
        
        this.transitionFooter()
        
        this.setCSSCustomProps()

        this.setScrollState()
      })
    })
  },

  mounted() {
    this.setCSSCustomProps()

    // DEV
    window.addEventListener('resize', () => {
      this.setCSSCustomProps()

      this.setScrollState()
    });

    this.setScrollState()

    window.addEventListener("scroll", () => {
      this.setScrollState()
    })
  },

  methods: {
    setCSSCustomProps() {
      // Stephen Shaw codepen.io/shshaw/pen/JqGmKx
      document.documentElement.style.setProperty('--innerVW', `${document.scrollingElement.clientWidth}px`)

      // Louis Hoebregts css-tricks.com/the-trick-to-viewport-units-on-mobile
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#comment-1651414
      // https://developers.google.com/web/updates/2017/09/visual-viewport-api
      document.documentElement.style.setProperty('--innerVH', `${window.visualViewport ? window.visualViewport.height : window.innerHeight}px`);
      
      document.documentElement.style.setProperty('--footerHeight', `${this.$refs.footer.$el.offsetHeight}px`);
    },

    setScrollState() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        this.$store.commit('setContentScrolledState',true)
      } else {
        this.$store.commit('setContentScrolledState',false)
      }
    },

    afterRouteEnter() {
      let footer = this.$refs.footer.$el
      
      footer.classList.remove('transition-footer')
      footer.style.removeProperty('height')
      footer.style.removeProperty('transform')
      footer.style.removeProperty('top')
      footer.style.removeProperty('bottom')
      
      this.$el.style.removeProperty('height')

      // just in case it's changed
      document.documentElement.style.setProperty('--footerHeight', `${this.$refs.footer.$el.offsetHeight}px`);
    },

    transitionFooter() {
      let footer = this.$refs.footer.$el,
          footerHeight = footer.offsetHeight,
          viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight,
          leavingFooterTopCoord = this.leavingFooterTopCoord,
          enteringFooterTopCoord = Math.round(footer.getBoundingClientRect().top),
          leavingFooterVisible = leavingFooterTopCoord < viewportHeight,
          enteringFooterVisible = enteringFooterTopCoord < viewportHeight
      
      if (leavingFooterTopCoord !== enteringFooterTopCoord && (leavingFooterVisible || enteringFooterVisible)) {
        this.$el.style.height =`${this.$el.offsetHeight}px`
        
        footer.style.height = `${footerHeight}px`
        footer.classList.add('transition-footer')
        footer.style.top = `${Math.min(leavingFooterTopCoord, viewportHeight)}px`
        footer.style.bottom = `0px`
        
        if (leavingFooterTopCoord < enteringFooterTopCoord) {
          // translate down
          footer.style.transform = `translate3d(0,${Math.min(enteringFooterTopCoord - leavingFooterTopCoord, footerHeight)}px,0)`
        } else {
          // translate up
          footer.style.transform = `translate3d(0,-${Math.min(leavingFooterTopCoord - enteringFooterTopCoord, viewportHeight - enteringFooterTopCoord)}px,0)`
        }
      }
    },
  },

  
}
</script>


<style lang="scss">
*,
*:before,
*:after { box-sizing: inherit; max-height: 999999px; }

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  height: 100%;
}

body {
  background-color: #0b151d;
  overflow-x: hidden;
  // stop scrollbar jump
  // temporary...
  overflow-y: scroll;
}

#__nuxt {
  background-image: url(~assets/personal-site--bg.jpg?disable=true);
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: 14vmax;
  
  @media (max-width: $mediumScreen) {
    background-size: 200px;
  }
  
  @media (max-width: $smallScreen) {
    background-size: 150px;
  }
}

#app {
  min-height: var(--innerVH);
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;
}

#__layout {
  // background-color: cyan;
}

#main-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  // background-color: magenta;
  padding-top: $navHeight;
  padding-bottom: var(--footerHeight);
  flex: 1 0;
  min-height: 100%;
  
  display: flex;
  flex-direction: column;
}


.content {
  width: calc(100% - 3rem);
  align-self: center;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  z-index: 1;
}



.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;

  // keep above footer
  position: relative;
  z-index: 1;
  
  .content {
    transition: transform $transitionDurationForDebugging;
  }
}

.transition--route-slide-left--enter,
.transition--route-slide-right--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(20vmax,0,0)
  }
}

.transition--route-slide-right--enter,
.transition--route-slide-left--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(-20vmax,0,0)
  }
}



//
// Photoswipe
//
.pswp__caption__center {
  text-align: center;
  padding-bottom: 5vh;
  font-family: 'Montserrat',Arial,Helvetica,sans-serif;
  @include responsive-property("font-size", 16px, 18px);
  text-shadow:
    0 0 0 black,
    0rem .2rem .4rem black;
  color: white;
}

.pswp__bg {
  background: rgba(0,0,0,.75);
  backdrop-filter: blur(0px);
  transition-property: opacity, backdrop-filter;
}

.pswp--open {
  backdrop-filter: blur(10px);
}

.pswp__ui--fit .pswp__top-bar, .pswp__ui--fit .pswp__caption,
.pswp__top-bar, .pswp__caption {
  background-color: transparent;
}

.pswp__top-bar {
  top: $navHeight;
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  filter: drop-shadow(0px 1px 3px black) drop-shadow(0px 1px 3px black);
  
  button {
    flaot: none;
  }
}

.pswp__preloader {
  // width: 100%;
  display: none;
}

.pswp__button {
  height: initial;
}

.pswp__share-modal--fade-in .pswp__share-tooltip {
  transform: translateX(-50%) translateY(0);
}

.pswp__share-tooltip {
  top: calc(#{$navHeight} + 56px);
  right: initial;
  left: 50%;
  transform: translateX(-50%);

  a {
    font-family: 'Montserrat',Arial,Helvetica,sans-serif;
  }
}

a.pswp__share--facebook:before {
  right: initial;
  left: 50%;
  transform: translateX(-50%);
}


</style>
