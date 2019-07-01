<template>
  <article class="quote" :class="authorString">
    <div class="quote--element">
      <img :src="quoteImage" :alt="`Image of ${quote.author}`" class="quote--author-image">
    </div>

    <div class="quote--content">
      <div class="quote--text" v-html="quote.__content"></div>
      <span class="quote--author">{{ quote.author }}</span>
      <div class="quote--author-info" v-html="quote.authorInfo">Author</div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['quote'],

  mounted() {
    // let quoteImage

    if (this.quote.quoteImage) {
      this.quoteImage = require('~/assets/quote-assets/' + this.quote.quoteImage)
    } else {
      this.quoteImage = require('~/assets/quote-assets/' + this.authorString + '.png')
    }

    // console.log(quoteImage)

    // let url = 'url(' + `'${quoteImage}'` + ')'

    // let url = `url('${quoteImage}')`
    // console.log(url)

    // this.$el.style.setProperty('--backgroundImage', `url(${quoteImage.toString()})`)
    // this.$el.style.setProperty('--backgroundImage', url)

    // this.$el.style.setProperty('--backgroundImage', quoteImage)
  },

  data: () => ({
    quoteImage: ''
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


.quote {
  position: relative;
  background-color: #020e0f;
  // box-shadow: 0 1rem 2rem -2rem color(highlight);
  border-radius: 2.75rem;
  // width: 80%;
  max-width: 50rem;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 2px;
    left: 4%;
    width: 92%;
    height: calc(100% - 4px);
    background-color: inherit;
    border-radius: 40px;
    filter: drop-shadow(0 .4rem .5rem color(highlight));
    opacity: .2;
  }
}

.quote--element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #020e0f;
  @include squircleMask(60);
  
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(#020e0f,0) 20%, #020e0f 50%);
  }
}

.quote--author-image {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 120%;
  max-height: 18rem;
  width: auto;
  // @include responsive-property("left", -4rem, 0rem);
}

.quote--content {
  position: relative;
  text-align: center;
  padding: 1.5rem 1rem 1.5rem 8rem;
}

.quote--text /deep/ p {
  font-family: 'Amatic SC', cursive;
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: .5rem;
  text-shadow:
    0 .1rem .1rem black,
    0 .1rem .2rem black,
    0 .1rem 1rem black;
}

.quote--author {
  display: block;
  color: color(mid);
  font-size: .9rem;
  // margin-top: .5rem;
}

.quote--author-info {
  display: block;
  color: color(mid);
  font-size: .75rem;
  font-style: italic;
  text-align: center;
}

.neil-degrasse-tyson {
  // padding-left: 40%;

  .quote--author-image {
    // @include responsive-property("left", -6rem, -1rem);
  }
}

.cs-lewis:after {
  // background-size: auto 150%;
  // background-position: -30% 100%;

  .quote--author-image {
    // @include responsive-property("left", -6rem, 0rem);
  }
}

// article {
//   position: relative;
//   // min-height: 12rem;
//   width: 80%;
//   max-width: 50rem;
//   padding: 2rem 2rem 2rem 35%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
//   &:before {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     box-shadow:
//       0 .5rem 2rem -1rem color(highlight);
//     background-color: rgba(black,.2);
//     border-radius: 2.5rem;
//     z-index: -1;
//   }
  
//   &:after {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background:
//       linear-gradient(to right, rgba(#020e0f,0) 30%,#020e0f 60%),
//       var(--backgroundImage) bottom left no-repeat,
//       #020e0f;
//     background-size: auto 100%;
//     @include squircleMask(50);
//     z-index: -1;
//   }
// }


// .quote-text {
//   text-align: center;

//   /deep/ p {
//     font-family: 'Amatic SC', cursive;
//     font-size: 1.5rem;
//     line-height: 1.2;
//     margin-top: 0;
//     margin-bottom: 0;
//     text-shadow:
//       0 .1rem .25rem black,
//       0 .3rem 1rem black;
//   }
// }

// .quote-author {
//   display: block;
//   color: color(mid);
//   font-size: .8rem;
//   margin-top: .5rem;
// }

// .author-info {
//   display: block;
//   color: color(mid);
//   font-size: .7rem;
//   font-style: italic;
//   text-align: center;
// }



// .neil-degrasse-tyson {
//   padding-left: 40%;

//   &:after {
//     background-position: -20% 100%;
//   }
// }

// .cs-lewis:after {
//   background-size: auto 150%;
//   background-position: -30% 100%;
// }
</style>