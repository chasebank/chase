<template>
  <main class="container">
    <h2>Contact</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae tempora quod architecto autem. Modi necessitatibus non vitae dolor consequatur quaerat quae, iure quidem voluptate officia optio nobis accusantium hic.</p>
  </main>
</template>

<script>
import metaInfo from '~/mixins/meta-info.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [metaInfo],

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

<style>

</style>
