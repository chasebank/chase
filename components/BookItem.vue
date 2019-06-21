<template>
  <article>
    <img :src="book.cover" :alt="`Image of the ${book.title} book cover`" class="book-cover">

    <span class="book-title">{{ book.title }}</span>

    <span class="book-authors">by {{ book.authors }}</span>

    <svg class="rating" width="1000" height="200" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="def-star" d="M100 10L121.246 78.7539H190L134.377 121.246L155.623 190L100 147.508L44.3769 190L65.6231 121.246L10 78.7539H78.7539L100 10Z" stroke-width="inherit" stroke="inherit"/>
        
        <g id="def-stars">
          <use xlink:href="#def-star" x="0" y="0" />
          <use xlink:href="#def-star" x="200" y="0" />
          <use xlink:href="#def-star" x="400" y="0" />
          <use xlink:href="#def-star" x="600" y="0" />
          <use xlink:href="#def-star" x="800" y="0" />
        </g>
        
        <mask id="mask-rating">
          <rect id="rating-el" width="100%" height="200" fill="white"/>
        </mask>
      </defs>
      
      <use class="rating-bg" xlink:href="#def-stars" x="0" y="0" stroke-width="8" />
      
      <use class="rating-el" xlink:href="#def-stars" x="0" y="0" stroke-width="10" mask="url(#mask-rating)" />
    </svg>
    <!-- <div class="book-content" v-html="book.__content"></div> -->
  </article>
</template>

<script>
export default {
  props: ['book'],

  data: () => ({

  }),

  mounted() {
    this.$el.style.setProperty('--bookHue', this.book.hue);
    // console.log('book hue ', this.book.hue)
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
article {
  // background-color: #020e0f;
  @include squircleBackground(60,#020e0f);
  padding: 1.5rem 1rem 1.5rem 1rem;
  box-shadow: 0 0.5rem 2rem -1rem #{hsl(var(--bookHue),100%,70%)};
  border-radius: 2.75rem;
  display: inline-block;
  position: relative;
  // margin-left: 4rem;
  margin-top: 1rem;
}

$leftPadding: 6rem;

.book-title {
  display: block;
  $hue: var(--bookHue);
  color: #{hsl(var(--bookHue),100%,70%)};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: $leftPadding;
}

.book-authors {
  display: block;
  margin-left: $leftPadding;
  $hue: var(--bookHue);
  color: #{hsl(var(--bookHue),100%,70%)};
  font-style: italic;
}

.book-content {
  margin-left: $leftPadding;

  /deep/ * {
    // font-size: 1rem;
    color: #{hsl(var(--bookHue),100%,95%)};
    line-height: 1.5;
  }
}

.book-cover {
  position: absolute;
  width: 7rem;
  left: -1rem;
  top: -.5rem;
  border: 4px solid #{hsl(var(--bookHue),100%,70%)};
}



svg {
  display: block;
  height: 1rem;
  width: auto;
  background-color: red;
}

.rating path {
  fill: inherit;
}

.rating-bg {
  fill: #eee;
  stroke: #aaa;
}

.rating-el {
  fill: #ffcf00;
  stroke: orange;
}
</style>