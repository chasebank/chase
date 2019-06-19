<template>
  <div id="app">
    <!-- <div id="header-bg"></div> -->

    <!-- <svg width="100%" viewBox="0 0 1000 200" id="cosmos" mask="url(#cosmos-mask)">
      <rect id="background" width="1000" height="1000" fill="transparent" mask="url(#cosmos-mask)" />
      <defs>
        <mask id="cosmos-mask" preserveAspectRatio="xMidYMin">
          <image id="cosmos-mask--image" x="0" y="0" height="100%" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/personal-site--header--mask.jpg"></image>
        </mask>
      </defs>

      <g id="starGroup" mask="url(#cosmos-mask)">
        <g class="starGroup" id="mStarGroup"></g>
      </g>
    </svg> -->

    <TheNavigation/>

    <div id="main-wrap" ref="mainWrap">
      <transition
        :name="$store.state.routeTransitionDirection"
        @after-enter="afterRouteEnter">
          <nuxt :key="$route.fullPath"/>
      </transition>
    </div>
    
    <TheFooter ref="footer"/>
  </div>
</template>

<script>
import TheNavigation from '~/components/TheNavigation.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavigation
    ,
    TheFooter
  },

  data: () => ({
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
      })
    })
  },

  mounted() {
    this.setCSSCustomProps()

    this.setScrollState()

    // this.createStarsHeader()

    window.addEventListener('resize', () => {
      this.setCSSCustomProps()

      this.setScrollState()
    });
  },

  methods: {
    createStarsHeader() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function getRandomTrend(min, max) {
        return Math.floor(Math.abs(Math.random() - Math.random()) * (1 + max - min) + min)
      }

      let cosmos = document.getElementById("cosmos"),
          starGroup = cosmos.getElementById("starGroup"),
          mask = cosmos.getElementById("cosmos-mask--image"),
          smallScreen = window.matchMedia( "(max-width: 550px)" ),
          mediumScreen = window.matchMedia( "(max-width: 768px)" ),
          x = parseInt(window.innerWidth),
          y = parseInt(window.innerWidth * .2211);

      if (smallScreen.matches) {
        y = parseInt(x * 0.6)
      }
      else if (mediumScreen.matches) {
        y = parseInt(x * .4)
      }
      else {
        y = parseInt(x * .2211)
      }

      mask.setAttribute("width", y * 4.6511628)

      cosmos.setAttribute("viewBox", `0 0 ${x} ${y}`)
      cosmos.querySelector("#background").setAttribute("height", y)
      cosmos.querySelector("#background").setAttribute("width", x)

      let makeItem = () => {
        let star = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
            size = getRandomInt(.5, 1.1),
            xCoord = getRandomTrend(0,x)
        
        star.setAttribute("width", size)
        star.setAttribute("height", size)
        star.setAttribute("x", xCoord)
        star.setAttribute("y", 0)
        star.setAttribute("opacity",1)
        star.setAttribute("fill", "#15546a")
        star.setAttribute("transform", 'translate3d(0,' + y + ',0)')

        starGroup.appendChild(star);

        if (Math.random() > .5) {
          star.classList.add('twinkle')
          star.style.animationDelay = Math.random() + 's'
          star.style.animationDuration = getRandomInt(2,6) + 's'
        }

        let time = new TimelineMax({repeat: -1}),
            speed = getRandomInt(6, 100)
        
        time.to(star, speed, {
          transform: `translate3d(0,${size * -1},0)`,
          ease: Linear.easeNone,
          opacity: .5
        }).progress( Math.random() )
      }

      let count = Math.max(Math.min(1100, x),600)

      for (let i = 0; i < count; i++) {
        makeItem()
      }
    },

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
      let checkState = () => {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          if (!this.$store.state.contentScrolled) this.$store.commit('contentScrolled')
        } else {
          if (this.$store.state.contentScrolled) this.$store.commit('contentNotScrolled')
        }
      }

      checkState()
      
      window.addEventListener("scroll", function(){
        checkState()
      })
    },

    afterRouteEnter() {
      let footer = this.$refs.footer.$el
      
      footer.classList.remove('transition-footer')
      footer.style.removeProperty('transform')
      footer.style.removeProperty('top')
      
      this.$el.style.removeProperty('height')
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
        // console.log('translate footer')
        this.$el.style.height =`${this.$el.offsetHeight}px`
        
        footer.classList.add('transition-footer')
        footer.style.top = `${Math.min(leavingFooterTopCoord, viewportHeight)}px`
        
        if (leavingFooterTopCoord < enteringFooterTopCoord) {
          // translate down
          footer.style.transform = `translate3d(0,${Math.min(enteringFooterTopCoord - leavingFooterTopCoord, footerHeight)}px,1px)`
        } else {
          // translate up
          footer.style.transform = `translate3d(0,-${Math.min(leavingFooterTopCoord - enteringFooterTopCoord, footerHeight)}px,1px)`
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
  padding: $smallPadding;
  overflow-x: hidden;
}

#__nuxt {
  // // background-color: purple;
  // background-image:
  //   url(~assets/personal-site--header.png),
  //   url(~assets/personal-site--footer.png),
  //   url(~assets/personal-site--bg.jpg);
  
  // background-attachment: fixed, initial, fixed;
  // background-repeat: no-repeat, no-repeat, repeat;
  // background-position: top center, bottom center;
  // background-size: 100%, 100%, auto;
  position: relative;
  z-index: 1;
  background-image: url(~assets/personal-site--bg.jpg);
  background-attachment: fixed;
  background-repeat: repeat;
  
  @media (max-width: $mediumScreen) {
    background-size: 200px;
  }
  
  @media (max-width: $smallScreen) {
    background-size: 150px;
  }
}

#app {
  // for footer absolute pos
  position: relative;
  min-height: var(--innerVH);
  display: flex;
  flex-direction: column;
}

#__layout {
  // background-color: cyan;
  z-index: 1;
}

#main-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  position: relative;
  z-index: 1;
  padding-top: $navHeight;
  flex: 1 0;
  min-height: 100%;
  padding-bottom: var(--footerHeight);
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
}



#header-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: $fullWidth;
  background-image: url(~assets/personal-site--header.png);
  background-size: cover;
  background-position: top left;
  padding-top: 21%;
  z-index: -10;
  
  @media (max-width: $mediumScreen) {
    padding-top: 40%;
  }
  
  @media (max-width: $smallScreen) {
    padding-top: 58%;
  }
}



#cosmos {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.twinkle {
  animation: twinkle 4s infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  700% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}



// .full-width {
//   // background-color: cyan;
//   height: 10rem;

//   @include full-width;
// }

.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;
  
  .content {
    transition: transform $transitionDurationForDebugging;
  }
}

// .transition--route-slide-left--leave-active,
// .transition--route-slide-right--leave-active {
//   position: fixed;
// }

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
