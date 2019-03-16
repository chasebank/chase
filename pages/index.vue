<template>
  <main class="container">
    <div class="content">
      <h1 class="header--home"><span>CHASE</span><span>WHITESIDE</span><span>Designer</span><span>Developer</span></h1>

      <h2 class="header--portfolio"><span><nuxt-link to="/portfolio" class="page-link">Portfolio</nuxt-link></span><span>Projects</span></h2>

      <portfolio-component />
      
      <h2><span><nuxt-link to="/notes/codes" class="page-link">Code</nuxt-link></span><span><nuxt-link to="/notes/codes" class="page-link">Snippets</nuxt-link></span></h2>

      <codes-component />

      <h2><span>Notes</span><span>& Quotes</span></h2>

      <notes-and-quotes-component/>

      <h3>Heading Three</h3>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'
import PortfolioComponent from '~/components/portfolio-component.vue'
import CodesComponent from '~/components/codes-component.vue'
import NotesAndQuotesComponent from '~/components/notes-and-quotes-component.vue'

export default {
  mixins: [pageMixin],

  name: 'home',

  components: {
    LongContent,
    PortfolioComponent,
    CodesComponent,
    NotesAndQuotesComponent
  },
}
</script>

<style lang="scss">

</style>
