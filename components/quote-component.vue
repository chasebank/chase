<template>
  <article class="quote" :class="authorString">
    <div class="quote-text" v-html="quote.__content"></div>
    <span class="quote-author">- {{ quote.author }}</span>
    <span class="author-info" v-html="quote.authorInfo"></span>
  </article>
</template>

<script>
export default {
  props: ['quote'],

  mounted() {
    let quoteImage

    if (this.quote.quoteImage) {
      quoteImage = require('~/assets/quote-assets/' + this.quote.quoteImage)
    } else {
      quoteImage = require('~/assets/quote-assets/' + this.authorString + '.png')
    }

    // console.log(quoteImage)

    // let url = 'url(' + `'${quoteImage}'` + ')'

    let url = `url('${quoteImage}')`
    console.log(url)

    // this.$el.style.setProperty('--backgroundImage', `url(${quoteImage.toString()})`)
    this.$el.style.setProperty('--backgroundImage', url)

    // this.$el.style.setProperty('--backgroundImage', quoteImage)
  },

  data: () => ({

  }),

  computed: {
    authorString() {
      return this.quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
// .quote {
//   position: relative;
  
//   padding: 2rem 2rem 2rem 30%;
  

//   &:before,
//   &:after {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//   }

//   &:before {
//     box-shadow: 0 1rem 2rem -1rem red;
//     border-radius: 3rem;
//   }

//   &:after {
//     background: #030f0f var(--backgroundImage) bottom left no-repeat;
//     background-size: contain;
//     @include squircleMask(50);
//   }
// }

article {
  position: relative;
  min-height: 12rem;
  width: 80%;
  max-width: 50rem;
  padding: 2rem 2rem 2rem 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow:
      0 .5rem 2rem -1rem color(highlight),
      0 1rem 3rem -1rem black,
      0 1rem 3rem -1rem black;
    background-color: rgba(black,.2);
    border-radius: 2.5rem;
    z-index: -1;
  }
  
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #020e0f var(--backgroundImage) bottom left no-repeat;
    background-size: auto 100%;
    @include squircleMask(50);
    z-index: -1;
  }
}


.quote-text {
  text-align: center;

  /deep/ p {
    font-family: 'Amatic SC', cursive;
    font-size: 1.75rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
    text-shadow:
      0 .1rem .25rem black,
      0 .3rem 1rem black;
  }
}

.quote-author {
  display: block;
  color: color(mid);
  font-size: .8rem;
  margin-top: .5rem;
}

.author-info {
  display: block;
  color: color(mid);
  font-size: .7rem;
  font-style: italic;
  text-align: center;
}



.neil-degrasse-tyson {
  padding-left: 40%;

  &:after {
    background-position: -20% 100%;
  }
}

.cs-lewis:after {
  background-size: auto 150%;
  background-position: -30% 100%;
}
</style>