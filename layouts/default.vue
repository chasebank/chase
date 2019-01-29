<template>
  <div id="main-wrap" ref="mainWrap">
    <navigation-component />
    
    <transition :name="$store.state.routeTransitionDirection" @before-leave="beforeRouteLeave">
      <nuxt :key="$route.fullPath" />
    </transition>

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
    footerPosition: '',
  }),

  mounted() {
    // Set a custom property with the value calculated
    this.getScrollbarWidth()

    this.setScrollState()

    window.onresize = () => { this.getScrollbarWidth() }

    if (this.footerPosition == '') {
      // console.log('setting original footer position')
      this.footerPosition = this.$refs.footer.$el.getBoundingClientRect().top
    }

    document.documentElement.style.setProperty('--calculatedFooterHeight', this.$refs.footer.$el.offsetHeight + 'px');
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
        document.documentElement.style.setProperty('--scrollbar', width + 'px');
      } else {
        document.documentElement.style.setProperty('--scrollbar', '0px');
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
  transition: all .8s;
}

body {
  background-color: #0b151d;
}

#__nuxt {
  // background-color: purple;
  background-image:
    url(~assets/personal-site--header.png),
    url(~assets/personal-site--footer.png),
    url(~assets/personal-site--bg.jpg);
  
  background-attachment: fixed, initial, initial;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: top center, bottom center;
  background-size: 100%, 100%, auto;
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
  background-color: cyan;
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
