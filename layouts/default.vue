<template>
  <div id="main-wrap">
    <navigation/>
    
    <transition :name="$store.state.routeTransitionDirection" @before-leave="beforeRouteLeave" @enter="routeEnter">
      <nuxt :key="$route.fullPath" />
    </transition>

    <my-footer/>
  </div>
</template>

<script>
import navigation from '~/components/navigation.vue'
import myFooter from '~/components/myFooter.vue'

export default {
  components: {
    navigation,
    myFooter
  },

  mounted() {
    // Set a custom property with the value calculated
    this.getScrollbarWidth()

    this.setScrollState()

    window.onresize = () => { this.getScrollbarWidth() }
  },

  data: () => ({
    
  }),

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

      console.log('container ' + container.offsetWidth, 'inner ' + inner.offsetWidth)

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
      // this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      // this.vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      this.fakeScrollPosition(el)
    },

    routeEnter(el) {
      // let newVh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      //     appHeight = this.$root.$el.offsetHeight;

      // console.log('appHeight', appHeight)

      // if (newVh > this.vh) {
      //   let this.vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      // }

      // if (newVh > appHeight)
    },

    fakeScrollPosition(el) {
      let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop

      let newScrollPos = el.getBoundingClientRect()

      // el.style.top = (scrollPosition * -1) + 'px'

      el.style.top = newScrollPos.top + 'px'

      // console.log('ran fakeScrollPos', scrollPosition)
      console.log('test new scrollPos ', newScrollPos.top)
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
  }
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

}

#__nuxt {
  background-color: purple;
  transition: all .8s;
}

#__layout {
  background-color: cyan;
  padding-top: $navHeight;
}

#main-wrap {
  background-color: magenta;
  // flex-direction: row;
  // flex-wrap: wrap;
}

$transitionDurationForDebugging: .6s;

main {
  width: 100%;
  align-self: stretch;
  // flex: 1 0 100%;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 100%;
  border: 10px solid gray;
  transition: all $transitionDurationForDebugging !important;
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

  // .content {
  //   position: fixed;
  //   top: 0;
  //   width: 100%;
  // }
}
</style>
