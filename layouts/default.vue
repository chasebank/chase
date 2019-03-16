<template>
  <div id="main-wrap" ref="mainWrap">
    <div id="header-bg"></div>

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

    <navigation-component />
    
    <transition :name="$store.state.routeTransitionDirection" @before-leave="beforeRouteLeave">
      <nuxt :key="$route.fullPath" />
    </transition>

    <div id="footer-bg"></div>

    <footer-component ref="footer"/>
  </div>
</template>

<script>
import NavigationComponent from '~/components/navigation-component.vue'
import FooterComponent from '~/components/footer-component.vue'

export default {
  components: {
    NavigationComponent,
    FooterComponent
  },

  data: () => ({
    
  }),

  mounted() {
    this.getScrollbarWidth()

    this.setScrollState()

    window.onresize = () => { this.getScrollbarWidth() }

    document.documentElement.style.setProperty('--calculatedFooterHeight', this.$refs.footer.$el.offsetHeight + 'px')



    // function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // }

    // function getRandomTrend(min, max) {
    //   return Math.floor(Math.abs(Math.random() - Math.random()) * (1 + max - min) + min)
    // }

    // let cosmos = document.getElementById("cosmos"),
    //     starGroup = cosmos.getElementById("starGroup"),
    //     mask = cosmos.getElementById("cosmos-mask--image"),
    //     smallScreen = window.matchMedia( "(max-width: 550px)" ),
    //     mediumScreen = window.matchMedia( "(max-width: 768px)" ),
    //     x = parseInt(window.innerWidth),
    //     y = parseInt(window.innerWidth * .2211);

    // if (smallScreen.matches) {
    //   y = parseInt(x * 0.6)
    // }
    // else if (mediumScreen.matches) {
    //   y = parseInt(x * .4)
    // }
    // else {
    //   y = parseInt(x * .2211)
    // }

    // mask.setAttribute("width", y * 4.6511628)

    // cosmos.setAttribute("viewBox", `0 0 ${x} ${y}`)
    // cosmos.querySelector("#background").setAttribute("height", y)
    // cosmos.querySelector("#background").setAttribute("width", x)

    // let makeItem = () => {
    //   let star = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
    //       size = getRandomInt(.5, 1.1),
    //       xCoord = getRandomTrend(0,x)
      
    //   star.setAttribute("width", size)
    //   star.setAttribute("height", size)
    //   star.setAttribute("x", xCoord)
    //   star.setAttribute("y", 0)
    //   star.setAttribute("opacity",1)
    //   star.setAttribute("fill", "#15546a")
    //   star.setAttribute("transform", 'translate3d(0,' + y + ',0)')

    //   starGroup.appendChild(star);

    //   if (Math.random() > .5) {
    //     star.classList.add('twinkle')
    //     star.style.animationDelay = Math.random() + 's'
    //     star.style.animationDuration = getRandomInt(2,6) + 's'
    //   }

    //   let time = new TimelineMax({repeat: -1}),
    //       speed = getRandomInt(6, 100)
      
    //   time.to(star, speed, {
    //     transform: `translate3d(0,${size * -1},0)`,
    //     ease: Linear.easeNone,
    //     opacity: .5
    //   }).progress( Math.random() )
    // }

    // let count = Math.max(Math.min(1100, x),600)

    // for (let i = 0; i < count; i++) {
    //   makeItem()
    // }
  },

  methods: {
    getScrollbarWidth() {
      // CALCULATE SCROLLBAR WIDTH FOR VW UNIT

      // small customization of codepen.io/Mamboleoo/post/scrollbars-and-css-custom-properties
      // to only set scrollbar width when scrollbar is visible
      
      // Create a temporary div container and append it into the body
      const container = document.createElement('div');
      // Append the container in the body
      document.body.appendChild(container);
      // Force scrollbar on the container
      container.style.overflow = 'scroll';

      // Add ad fake div inside the container
      const inner = document.createElement('div');
      container.appendChild(inner);

      // Calculate the width based on the container width minus its child width
      const width = container.offsetWidth - inner.offsetWidth;

      // Remove the container from the body
      document.body.removeChild(container);

      // Check if scrollbar exists on body https://stackoverflow.com/a/681729/3606700
      const root = document.compatMode == 'BackCompat' ? document.body : document.documentElement;
      const hasVerticalScrollbar = root.scrollHeight > root.clientHeight;

      // set scrollbar width IF it exists
      if (hasVerticalScrollbar) {
        document.documentElement.style.setProperty('--scrollbarWidth', width + 'px');
        // console.log('scrollbar width: ', width)
      } else {
        document.documentElement.style.setProperty('--scrollbarWidth', '0px');
      }
    },

    beforeRouteLeave(el) {
      this.fakeScrollPosition(el)
    },

    fakeScrollPosition(el) {
      // let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop

      let newScrollPos = el.getBoundingClientRect()

      // el.style.top = (scrollPosition * -1) + 'px'

      el.style.top = newScrollPos.top + 'px'
    },

    setScrollState() {
      let checkState = () => {
        // if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        //   this.$store.commit('contentScrolled')
        // } else {
        //   this.$store.commit('contentNotScrolled')
        // }

        // nested condition so that it only runs once
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
  },

  
}
</script>


<style lang="scss">
:root {
  --scrollbarWidth: 0px;
}

*,
*:before,
*:after { box-sizing: inherit; max-height: 999999px; }

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  height: 100%;
}

body,
#__nuxt,
#__layout,
#main-wrap {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  // transition: all .8s;
}

body {
  background-color: #0b151d;
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

#footer-bg {
  position: fixed;
  bottom: 0;
  left: 0;
  width: $fullWidth;
  background-image: url(~assets/personal-site--footer.png);
  background-size: cover;
  background-position: bottom right;
  padding-top: 21%;
  z-index: -10;
  
  @media (max-width: $mediumScreen) {
    padding-top: 30%;
  }
  
  @media (max-width: $smallScreen) {
    padding-top: 40%;
  }
}

#__layout {
  // background-color: cyan;
  z-index: 1;
}

#main-wrap {
  // background-color: #00ff00;
  position: relative;
  min-height: 100%;
}

$transitionDurationForDebugging: .6s;

main {
  width: 100%;  
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 100%;
  // box-shadow: inset 0 0 1rem 1rem gray;

  display: flex;
  flex-direction: column;

  padding-bottom: var(--calculatedFooterHeight)
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



.content {
  // box-shadow: inset 0 0 1rem 1rem red;

  padding-top: $navHeight;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: calc(90vw - 2rem);
  align-self: center;
  max-width: 60rem;
}

.full-width {
  // background-color: cyan;
  height: 10rem;

  @include full-width;
}

.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;

  .content {
    transition: transform $transitionDurationForDebugging, opacity $transitionDurationForDebugging;
  }
}
.transition--route-slide-left--enter,
.transition--route-slide-right--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(60vmax, 0, 0);
  }
}
.transition--route-slide-right--enter,
.transition--route-slide-left--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(-60vmax, 0, 0);
  }
}
.transition--route-slide-left--leave-active,
.transition--route-slide-right--leave-active {
  position: fixed;
  width: 100%;
}
</style>
