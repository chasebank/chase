<template>
  <main class="container">
    <div class="content">
      <h1 class="header--home"><span>CHASE</span><span>WHITESIDE</span><span>Designer</span><span>Developer</span></h1>

      <h2 class="header--portfolio"><span><nuxt-link to="/portfolio" class="page-link">Portfolio</nuxt-link></span><span>Projects</span></h2>

      <portfolio></portfolio>
      
      <h2><span>Code</span><span>Snippets</span></h2>

      <div class="full-width"></div>

      <h2><span>Notes</span><span>& Quotes</span></h2>

      <h3>Heading Three</h3>

      <h4>Heading Four</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repudiandae quis cum sapiente commodi? Quae voluptate odit placeat eos, vel omnis delectus fugit. Itaque officiis animi cupiditate error deleniti labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repudiandae quis cum sapiente commodi?</p>

      <p>Quae voluptate odit placeat eos, vel omnis delectus fugit. Itaque officiis animi cupiditate error deleniti labore.</p>

      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      
      <long-content></long-content>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'
import Portfolio from '~/components/portfolio.vue'

export default {
  mixins: [pageMixin],

  name: 'home',

  components: {
    LongContent,
    Portfolio
  },
}
</script>

<style lang="scss">

</style>
