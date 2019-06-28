<template>
  <main>
    <div class="content">
      <h1><span>Email</span><span>me</span></h1>

      <p>Thanks so much for visiting my site! If you'd like to get in touch with me, please use the form below.</p>
      
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae tempora quod architecto autem. Modi necessitatibus non vitae dolor consequatur quaerat quae, iure quidem voluptate officia optio nobis accusantium hic.</p> -->
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 10
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
h1 span:nth-child(2) {
  left: 30%;
}

</style>
