<script>
export default {
  name: 'pageMixin',

  head() {
    return {
      title: this.pageTitle,
    }
  },

  data: () => ({
    footerPosition: '',
  }),

  mounted() {
    this.$store.commit('handleHistory', this.pageTitle)
  },

  methods: {

  }
};
</script>