<template>
  <main class="container">
    <h2>Home</h2>
    <long-content></long-content>
  </main>
</template>

<script>
import metaInfo from '~/mixins/meta-info.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [metaInfo],

  components: {
    LongContent
  },
}
</script>

<style lang="scss">

</style>
