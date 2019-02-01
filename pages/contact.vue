<template>
  <main>
    <div class="content">
      <h1><span>Contact</span><span>me</span></h1>

      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae tempora quod architecto autem. Modi necessitatibus non vitae dolor consequatur quaerat quae, iure quidem voluptate officia optio nobis accusantium hic.</p>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 3
  },

  components: {
    LongContent
  },

  data: () => ({
    title: 'Contact',
  })
}
</script>

<style lang="scss" scoped>

main {
  // background-color: yellow;
}

</style>
