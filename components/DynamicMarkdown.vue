<script lang="js">
// TODO map extraComponents prop in computed to auto import these
import DynamicImage from "~/components/DynamicImage.vue"
import PhotoswipeImage from "~/components/PhotoswipeImage.vue"
import PhotoswipeGallery from "~/components/PhotoswipeGallery.vue"

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

  components: {
    DynamicImage,
    PhotoswipeImage,
    PhotoswipeGallery
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