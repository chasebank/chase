<script>
export default {
  name: 'metaInfo',

  head() {
    return {
      title: this.title,
    }
  },

  mounted() {
    // this.$store.commit('handleHistory', this.title)
  }
};
</script>