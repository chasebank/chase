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
    
    let pageEl = this.$root.$children[0],
        footer = pageEl.$refs.footer.$el,
        footerHeight = footer.offsetHeight,
        vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        newFooterPosition = footer.getBoundingClientRect().top,
        firstFooterPosition = pageEl.footerPosition
    
    if (firstFooterPosition <= vh && newFooterPosition > vh) {
      // console.log('going bigger')
      footer.style.top = firstFooterPosition + 'px'
      footer.classList.add('move-footer-down')

      setTimeout(() => {
        document.documentElement.style.setProperty('--conditionalFooterSpacer', '0px');
        footer.style.removeProperty('top')
        footer.classList.remove('move-footer-down')
      }, 600)
      
    }
    
    else if (firstFooterPosition > vh && newFooterPosition <= vh) {
      // console.log('going smaller')
      footer.classList.add('move-footer-up')

      setTimeout(() => {
        document.documentElement.style.setProperty('--conditionalFooterSpacer', '0px');
        footer.classList.remove('move-footer-up')
      }, 600)
    }

    // this.$nextTick(() => {
      
    // })
  },

  methods: {

  },

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')

    let pageEl = this.$root.$children[0],
    footer = pageEl.$refs.footer.$el

    console.log(footer.getBoundingClientRect().top)

    pageEl.footerPosition = footer.getBoundingClientRect().top

    next()
  } 
};
</script>