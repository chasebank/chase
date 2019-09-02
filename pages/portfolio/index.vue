<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>
      
      <PortfolioList :projects="projects"/>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import PortfolioList from '~/components/PortfolioList.vue'

import projects from '~/pages/portfolio/list.js'

export default {
  async asyncData ({app}) {
    async function asyncImport (slug) {
      const wholeMD = await import(`~/pages/portfolio/${slug}.md`)

      return {
        ...wholeMD.attributes,
        slug: slug,
        image: 'test-iamge'
      }
    }

    return Promise.all(projects.map(project => asyncImport(project)))
    .then((res) => {
      return {
        projects: res
      }
    })
  },
  
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    PortfolioList
  },

  data: () => ({
    pageTitle: 'Portfolio',
  })
}
</script>

<style lang="scss" scoped>

</style>