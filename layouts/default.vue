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
      document.documentElement.style.setProperty('--innerVH', `${window.visualViewport.height || window.innerHeight}px`);
      
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
      
      this.$el.style.removeProperty('height')

      // just in case it's changed
      document.documentElement.style.setProperty('--footerHeight', `${this.$refs.footer.$el.offsetHeight}px`);
    },

    transitionFooter() {
      let footer = this.$refs.footer.$el,
          footerHeight = footer.offsetHeight,
          viewportHeight = window.visualViewport.height || window.innerHeight,
          leavingFooterTopCoord = this.leavingFooterTopCoord,
          enteringFooterTopCoord = Math.round(footer.getBoundingClientRect().top),
          leavingFooterVisible = leavingFooterTopCoord < viewportHeight,
          enteringFooterVisible = enteringFooterTopCoord < viewportHeight
      
      if (leavingFooterTopCoord !== enteringFooterTopCoord && (leavingFooterVisible || enteringFooterVisible)) {
        this.$el.style.height =`${this.$el.offsetHeight}px`
        
        footer.style.height = `${footerHeight}px`
        footer.classList.add('transition-footer')
        footer.style.top = `${Math.min(leavingFooterTopCoord, viewportHeight)}px`
        
        // z translate must be zero to keep behind content during transition
        if (leavingFooterTopCoord < enteringFooterTopCoord) {
          // translate down
          footer.style.transform = `translate3d(0,${Math.min(enteringFooterTopCoord - leavingFooterTopCoord, footerHeight)}px,0px)`
        } else {
          // translate up
          footer.style.transform = `translate3d(0,-${Math.min(leavingFooterTopCoord - enteringFooterTopCoord, viewportHeight - enteringFooterTopCoord)}px,0px)`
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
  background-image: url(~assets/personal-site--bg.jpg);
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

  // stacking context
  // keep negative layers in front of header.
  // needed to fix strange conflict of
  // same props on .content
  position: relative;
  z-index: 1;

  // allow 3d stacking of footer bg durring transition
  transform-style: preserve-3d;
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
  max-width: 60rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  // stacking context
  // keep negative layers in front of header
  position: relative;
  z-index: 1;
}



.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;
  
  .content {
    transition: transform $transitionDurationForDebugging;
  }
}

.transition--route-slide-left--enter,
.transition--route-slide-right--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(20vmax,0,1px)
  }
}

.transition--route-slide-right--enter,
.transition--route-slide-left--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(-20vmax,0,1px)
  }
}


</style>
