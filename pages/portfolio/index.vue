<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>
      
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
    title: 'Portfolio',
  })
}
</script>

<style lang="scss" scoped>

</style>