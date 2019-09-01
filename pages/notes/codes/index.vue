<template>
  <main class="container">
    <div class="content">
      <h1><span>Code</span><span>Snippets</span></h1>
      
      <CodesList :posts="codePosts"/>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import CodesList from '~/components/CodesList.vue'

import codeLanguages from '~/pages/notes/codes/list.js'

export default {
  async asyncData ({app}) {
    async function asyncImport (slug) {
      const wholeMD = await import(`~/pages/notes/codes/${slug}.md`)

      return {
        ...wholeMD.attributes,
      }
    }

    return Promise.all(codeLanguages.map(post => asyncImport(post)))
    .then((res) => {
      return {
        codeLanguages: res
      }
    })
  },
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