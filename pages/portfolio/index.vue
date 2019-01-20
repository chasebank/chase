<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>
      
      <portfolio></portfolio>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import Portfolio from '~/components/portfolio.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    Portfolio
  },

  data: () => ({
    title: 'Portfolio',
  })
}
</script>

<style lang="scss" scoped>

</style>