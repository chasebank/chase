<template>
  <main class="container">
    <div class="content">
      <h2>Home</h2>

      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      
      <long-content></long-content>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  name: 'home',

  components: {
    LongContent
  },
}
</script>

<style lang="scss">

</style>
