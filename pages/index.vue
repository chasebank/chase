<template>
  <main class="container">
    <div class="content">
      <h2>Home</h2>
      <long-content></long-content>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  components: {
    LongContent
  },
}
</script>

<style lang="scss">

</style>
