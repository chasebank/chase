<template>
  <main class="container">
    <div class="content">
      <h2>About</h2>
      <long-content></long-content>
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
    title: 'Contact',
  })
}
</script>

<style>

</style>
