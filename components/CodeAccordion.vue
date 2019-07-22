<template>
  <div class="definition-item">
    <dt @click="expand"
        :aria-expanded="`${expanded}`"
        :aria-controls="`definition-${item}`"
        :class="{'expanded' : expanded}"
        ref="definitionTerm"
        :id="item.title.replace(/\W+/g, '-').toLowerCase()">
      {{ item.title }}
      <div class="toggle">
        <svg id="icon--back" xmlns="http://www.w3.org/2000/svg" width="19" height="24.665" viewBox="0 0 19 24.665">
          <path d="M18.779 22.529L5.205 15.003l13.574-8.225V0L-.114 12.467v1.885l18.893 10.313z"/>
        </svg>
      </div>
    </dt>
    
    <transition
      :name="transitionName"
      @enter="transition"
      @after-enter="afterTransition"
      @leave="transition"
      @after-leave="afterTransition">
      <dd
        ref="post"
        :id="`definition-${item}`"
        :aria-hidden="`${!expanded}`"
        v-show="expanded"
        >
          <div v-html="item.__content"></div>
        </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item'],

  data: () => ({
    expanded: false,
    transitionName: ''
    // transitionName: 'transition-accordion-'
  }),

  mounted() {
    console.log('window.location.hash ', window.location.hash)

    if (window.location.hash == `#${this.item.title.replace(/\W+/g, '-').toLowerCase()}`) {
      // Fragment exists
      this.expanded = true
    }

    setTimeout(() => {
      this.expanded = false
      
      setTimeout(() => {
        this.$refs.post.style.position = 'relative'
        this.$refs.post.style.visibility = 'visible'
        this.transitionName = 'transition-accordion-'
      }, 200)
    }, 300)

    this.transitionName = 'transition-accordion-'
  },
  
  methods: {
    expand() {
      this.expanded = !this.expanded
    },
    
    transition(el) {
      this.$el.classList.add('expanding')
      let firstHeight, endHeight
      
      if (this.expanded) {
        el.style.display = "none"
        firstHeight = `${this.$el.offsetHeight}px`

        el.style.removeProperty('display')
        endHeight = `${this.$el.offsetHeight}px`
      }
      
      else {
        firstHeight = `${this.$el.offsetHeight}px`
      
        el.style.display = "none" 
        endHeight = `${this.$el.offsetHeight}px`

        el.style.removeProperty('display')
      }
      
      this.$el.style.height = firstHeight
      this.$el.offsetHeight // force repaint
      this.$el.style.height = endHeight
    },

    afterTransition() {
      this.$el.classList.remove('expanding')
      this.$el.style.removeProperty('height')
    },
  }
}
</script>

<style lang="scss" scoped>
$transitionDuration: .3s;
.definition-item {
  transition: height $transitionDuration;
  padding-left: .6rem;
  margin-left: -.3rem;
  
  + .definition-item {
    margin-top: 1.5rem;
  }

  dd {
    position: absolute;
    visibility: hidden;
    width: 100%;
  }
}

.expanding {
  overflow: hidden;
}

dt {
  position: relative;
  background: linear-gradient(to right, rgba(color(highlight), .2), rgba(color(highlight), 0));
  padding: .5rem 1rem .5rem 1.75rem;
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-weight: bold;
  font-size: 1.25rem;
  color: color(light);
  text-shadow: 0rem .1rem .15rem black;
  transition: color .3s;
  cursor: pointer;
  
  backface-visibility: hidden;
  font-smoothing: antialiased;
  transform: scale(.99999);
  
  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(color(highlight), .2), rgba(color(highlight), 0));
    transition: transform .3s, opacity .3s;
    transform-origin: top left;
    transform: scale3d(0, 1, 1);
    opacity: 0;
    z-index: -1;
  }
}

dd {
  margin-left: 0;
  padding: 1rem 0 3rem 0;
  
  backface-visibility: hidden;
  font-smoothing: antialiased;
  transform: scale(.99999);
}

.toggle {
  background:
    linear-gradient(rgba(color(highlight),.5), rgba(color(highlight),.5)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/personal-site--bg.jpg);
  position: absolute;
  top: 50%;
  left: -.5rem;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 .2rem .4rem rgba(black,.25);
  
  svg {
    width: .5rem;
    height: auto;
    // position: relative;
    // top: .5px;
    // left: -1px;
    fill: cyan;
    transition: transform .4s ease-in-out;
    transform: rotate3d(0,0,1,-90deg);
  }
}

.expanded {
  color: white;
  text-shadow: none;
  
  &:before {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  
  .toggle {
    background:
      linear-gradient(rgba(color(highlight),.6), rgba(color(highlight),1)),
      url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/personal-site--bg.jpg);
    
    svg {
      fill: white;
      top: .5px;
      transform: rotate3d(1,1,0,-180deg) translateX(-1px);
    }
  }
}

.transition-accordion--enter-active,
.transition-accordion--leave-active {
  transition: opacity $transitionDuration, transform $transitionDuration;
  z-index: -1;
}

.transition-accordion--enter,
.transition-accordion--leave-to {
  opacity: 0;
  transform: translate3d(0,-3rem,1px);
}

// .cp_embed_wrapper {
//   position: absolute;
//   width: 100%;
//   visibility: hidden;
// }
</style>