<script lang="js">
  export default {
    props: ["renderFunc", "staticRenderFuncs", "extraComponent"],

    computed: {
      extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/${this.extraComponent}.vue`)
      }
    },

    render (createElement) {
      return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    },

    created () {
      this.templateRender = new Function(this.renderFunc)()
      this.$options.staticRenderFns = new Function(this.staticRenderFuncs)()
    }
  }
</script>