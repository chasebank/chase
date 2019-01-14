<template>
  <main class="container">
    <div class="content">
      <h2>About</h2>
      <long-content></long-content>
    </div>
  </main>
</template>

<script>
import metaInfo from '~/mixins/meta-info.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [metaInfo],

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
