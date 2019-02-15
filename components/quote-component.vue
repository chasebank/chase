<template>
  <div class="quote">
    <div class="quote-content" v-html="quote.__content"></div>
  </div>
</template>

<script>
export default {
  props: ['quote'],

  mounted() {
    let quoteImage

    if (this.quote.quoteImage) {
      quoteImage = require('~/assets/quote-assets/' + this.quote.quoteImage)
    } else {
      quoteImage = require('~/assets/quote-assets/' + this.quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase() + '.png')
    }

    console.log(quoteImage)

    this.$el.style.setProperty('--backgroundImage', `url(${quoteImage})`)
  },

  data: () => ({

  }),

  computed: {
    
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.quote {
  position: relative;
  
  padding: 2rem 2rem 2rem 30%;
  

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &:before {
    box-shadow: 0 1rem 2rem -1rem red;
    border-radius: 3rem;
  }

  &:after {
    background: #030f0f var(--backgroundImage) bottom left no-repeat;
    background-size: contain;
    @include squircleMask(50);
  }
}
</style>