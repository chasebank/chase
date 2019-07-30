<template>
  <main class="container">
    <div class="content">
      <h2>About</h2>
      
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      
      <long-content></long-content>

      <h3 id="test-anchor">This is an anchor test</h3>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    LongContent
  },

  data: () => ({
    title: 'About',
  })
}
</script>

<style>

</style>
