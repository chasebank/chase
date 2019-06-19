<template>
  <main class="container">
    <div class="content">
      <h1><span>Code</span><span>Snippets</span></h1>
      
      <CodesList/>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import CodesList from '~/components/CodesList.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 2
  },

  components: {
    CodesList
  },

  data: () => ({
    title: 'Code Snippets',
  })
}
</script>

<style lang="scss" scoped>

</style>