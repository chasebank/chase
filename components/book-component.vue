<template>
  <div>
    <div class="book-content">
      <span class="book-title">{{ book.title }}</span>
      <span class="book-authors">{{ book.authors }}</span>
      <span class="book-content" v-html="book.__content"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['book'],

  data: () => ({

  }),

  mounted() {
    this.documentElement.style.setProperty('--bookHue', this.book.hue);
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>