<template>
  <main class="container">
    <div class="quote--content" :class="quoteStyling">
      <transition name="quote-page--transition-" appear>
        <img :src="thisQuote.image" class="quote--image">
      </transition>

      <transition name="quote-page--transition-" appear>
        <div v-if="thisQuote.__content" class="quote--text" v-html="thisQuote.__content" ref="quoteContent"></div>
      </transition>

      <transition name="quote-page--transition-" appear>
        <span v-if="thisQuote.author" class="quote--author" v-html="thisQuote.author"></span>
      </transition>

      <transition name="quote-page--transition-" appear>
        <span v-if="thisQuote.authorInfo" class="quote--author-info" v-html="thisQuote.authorInfo"></span>
      </transition>
    </div>
  </main>
</template>

<script>
import pageMixin from '@/mixins/page-mixin.vue'

const quotes = {};
const req = require.context('@/pages/notes/quotes/', false, /\.md$/);

req.keys().forEach((key) => {
  quotes[key] = req(key);
});

export default {
  components: {

  },

  data() {
    return {
      // title: 'Project'
      // showQuoteImage: false
    }
  },

  mixins: [pageMixin],

  meta: {
    depth: 3
  },

  computed: {
    quotes() {
      const quoteArray = [];
      
      Object.keys(quotes).forEach((key) => {
        const quote = quotes[key],
              slug = key.replace('./', '').replace('.md', '');

        quote.slug = slug
        quote.authorSlug = quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()

        if (quote.quoteImage) {
          quote.image = require('@/assets/quote-assets/' + quote.quoteImage)
        } else {
          quote.image = require('@/assets/quote-assets/' + quote.authorSlug + '.png')
        }

        quoteArray.push(quote);
      });
      
      return quoteArray
    },

    thisQuote() {
      return this.quotes.find(quote => quote.slug == this.$route.params.title)
    },

    quoteStyling() {
      let stylingClass = this.thisQuote.hasOwnProperty('quoteImage') ? this.thisQuote.quoteImage.replace(/\.[^/.]+$/, "") : this.thisQuote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()

      return stylingClass
    },
    // thisProjectTitle() {
    //   return this.thisProject.toString()
    // },
    // color() {
    //   return this.thisProject.colorBackground
    // },
    title() {
      return this.thisQuote.title
    }
  },

  mounted() {
    // this.showQuoteImage = true

    let quoteContentStart = this.$refs.quoteContent.querySelector('p:first-of-type'),
        quoteContentEnd = this.$refs.quoteContent.querySelector('p:last-of-type')

    quoteContentStart.insertAdjacentHTML('afterbegin', "<span class='opening-double-quote'>“</span>&#xfeff;");
    quoteContentEnd.insertAdjacentHTML('beforeend', "&#xfeff;<span class='closing-double-quote'>”</span>");
  }

  // mounted() {
  //   this.$el.style.setProperty('--textColor', this.thisQuote.textColor)
  //   this.$el.style.setProperty('--backgroundColor', this.thisQuote.backgroundColor)
  // }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #020e0e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quote--content {
  padding-left: 22%;
  padding-right: 5vw;
  text-align: center;
}

.quote--image {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 90vh;
  z-index: -1;
}

.quote--text {
  font-family: 'Amatic SC', 'Exo 2', sans-serif;
  font-size: 3rem;
  color: #d2f8ff;

  display: flex;
  flex-wrap: wrap
  // text-shadow: inherit;
}

.quote--author {
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #d2f8ff;
  margin-bottom: .25rem;
  // margin-top: .5rem;
}

.quote--author-info {
  display: block;
  font-size: .8rem;
  color: #70bfce;
  // line-height: 1.2;
}

/deep/ .opening-double-quote {
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-size: 2em;
  line-height: .5em;
  display: inline-block;
  // background-color: purple;
  position: absolute;
  transform: translateX(-115%);
  color: #70bfce;
}

/deep/ .closing-double-quote {
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  
  display: inline-block;
  // background-color: purple;
  position: absolute;
  color: #70bfce;
  // transform: translateX(100%)
}

.quote-page--transition--enter-active,
.quote-page--transition--leave-active {
  transition: transform 1s;
}

.quote-page--transition--enter {
  transform: translate3d(0,5rem,0)
}


.quote--text { transition-duration: .8s }
.quote--author { transition-duration: .9s }
.quote--author-info { transition-duration: 1.1s }
.quote--image { transition-duration: 1.4s }
</style>
