<script>
export default {
  name: 'pageMixin',

  head() {
    return {
      title: this.title,
    }
  },

  data: () => ({
    footerPosition: '',
  }),

  mounted() {
    this.$store.commit('handleHistory', this.title)
  },

  methods: {

  }
};
</script>