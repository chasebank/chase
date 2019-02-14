<template>
  <main class="container">
    <div class="content">
      <h1><span>Notes</span><span>& Quotes</span></h1>

      <quotes/>
    </div>
  </main>
</template>

<script>
import quotes from '@/components/quotes-component.vue'
import pageMixin from '@/mixins/page-mixin.vue'

export default {
  components: {
    quotes
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
