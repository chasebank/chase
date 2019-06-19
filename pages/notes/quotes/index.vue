<template>
  <main class="container">
    <div class="content">
      <h1><span>Notes</span><span>& Quotes</span></h1>

      <QuoteList/>
    </div>
  </main>
</template>

<script>
import QuoteList from '@/components/QuoteList.vue'
import pageMixin from '@/mixins/page-mixin.vue'

export default {
  components: {
    QuoteList
  },

  data() {
    return {
      title: 'Notes & Quotes',
    }
  },

  mixins: [pageMixin],

  meta: {
    depth: 2
  },
}
</script>
