<template>
  <article>
    <img :src="book.cover" :alt="`Image of the ${book.title} book cover`" class="book-cover">
    <span class="book-title">{{ book.title }}</span>
    <span class="book-authors">by {{ book.authors }}</span>
    <div class="book-content" v-html="book.__content"></div>
  </article>
</template>

<script>
export default {
  props: ['book'],

  data: () => ({

  }),

  mounted() {
    this.$el.style.setProperty('--bookHue', this.book.hue);
    console.log('book hue ', this.book.hue)
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
</style>