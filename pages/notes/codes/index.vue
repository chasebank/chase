<template>
  <main class="container">
    <div class="content">
      <h1><span>Code</span><span>Snippets</span></h1>
      
      <codes-component />
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import CodesComponent from '~/components/codes-component.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    CodesComponent
  },

  data: () => ({
    title: 'Code Snippets',
  })
}
</script>

<style lang="scss" scoped>

</style>