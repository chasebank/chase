<template>
  <div>
    <dl>
      <code-snippet-accordion v-for="code in codes" :key="code.slug" :item="code" />
    </dl>
  </div>
</template>

<script>
import CodeSnippetAccordion from '~/components/codeSnippetAccordion.vue'

const codes = {};
const req = require.context('@/pages/notes/codes/', false, /\.md$/);

req.keys().forEach((key) => {
  codes[key] = req(key);
});

export default {
  components: {
    CodeSnippetAccordion
  },

  computed: {
    codes() {
      const codeArray = [];
      
      Object.keys(codes).forEach((key) => {
        const code = codes[key],
              slug = key.replace('./', '').replace('.md', '');

        code.slug = slug
        // project.image = require('~/assets/portfolio-assets/' + slug + '/code-thumb.jpg')

        codeArray.push(code);
      });
      
      return codeArray.sort( (firstCode, secondCode) => firstCode.created < secondCode.created ? 1 : -1 );
    }
  }
}
</script>

<style lang="scss" scoped>

</style>