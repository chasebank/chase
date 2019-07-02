<template>
  <header>
    <svg width="100%" viewBox="0 0 1000 200" id="cosmos" mask="url(#cosmos-mask)">
      <rect id="background" width="1000" height="1000" fill="transparent" mask="url(#cosmos-mask)" />
      <defs>
        <mask id="cosmos-mask" preserveAspectRatio="xMidYMin">
          <image id="cosmos-mask--image" x="0" y="0" height="100%" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/personal-site--header--mask.jpg"></image>
        </mask>
      </defs>

      <g id="starGroup" mask="url(#cosmos-mask)">
        <g class="starGroup" id="mStarGroup"></g>
      </g>
    </svg>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    
  }),

  mounted() {
    this.createStarsHeader()
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
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  // don't adjust for scrollbar
  width: 100vw;
  background-image: url(~assets/personal-site--header.png);
  // background: red;
  background-size: cover;
  background-position: top left;
  // padding-top: 21%;
  height: 21vmax;
  min-height: 250px;

  z-index: -10;
  
  // @media (max-width: $mediumScreen) {
  //   height: 32vmax;
  // }
  
  @media (max-width: $smallScreen) {
    // padding-top: calc(var(--innerVW) * .6);
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
</style>
