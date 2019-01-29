<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>
      
      <portfolio-component />
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import PortfolioComponent from '~/components/portfolio-component.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    PortfolioComponent
  },

  data: () => ({
    title: 'Portfolio',
  })
}
</script>

<style lang="scss" scoped>

</style>