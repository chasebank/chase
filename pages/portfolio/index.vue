<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>
      
      <PortfolioList/>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import PortfolioList from '~/components/PortfolioList.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    PortfolioList
  },

  data: () => ({
    title: 'Portfolio',
  })
}
</script>

<style lang="scss" scoped>

</style>