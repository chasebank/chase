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
    // HANDLE SCROLLBAR FOR VW
    const getScrollbarWidth = () => {
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
    };

    // Set a custom property with the value we calculated
    getScrollbarWidth();

    window.onresize = () => { getScrollbarWidth() }
  },

  methods: {
    beforeRouteLeave() {

    },

    routeEnter() {

    }
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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

main {
  width: 100%;
  align-self: stretch;
  flex-grow: 1;
  border: 10px solid black;
}


$transitionDurationForDebugging: .8s;
.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;

  main {
    transition: transform $transitionDurationForDebugging, opacity $transitionDurationForDebugging;
  }
}
.transition--route-slide-left--enter,
.transition--route-slide-right--leave-to {
  opacity: 0;
  
  main {
    transform: translate3d(60vmax, 0, 0);
  }
}
.transition--route-slide-right--enter,
.transition--route-slide-left--leave-to {
  opacity: 0;
  
  main {
    transform: translate3d(-60vmax, 0, 0);
  }
}
.transition--route-slide-left--leave-active,
.transition--route-slide-right--leave-active {
  position: fixed;
  width: 100%;

  // main {
  //   position: fixed;
  //   top: 0;
  //   width: 100%;
  // }
}
</style>
