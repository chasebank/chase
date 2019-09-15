<template>
  <figure :class="classes" class="grid-item gallery-image" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a :href="require(`~/assets/images/${this.imageURL}?disable=true`)" itemprop="contentUrl" title="View larger image">
      <img
        :srcset="require(`~/assets/images/${this.imageURL}`).srcSet"
        :alt="caption"
        itemprop="thumbnail" />
    </a>
    <figcaption itemprop="caption description">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    // lowRes: {
    //   type: String,
    //   required: true
    // },
    // highRes: {
    //   type: String,
    //   required: true
    // },
    classes: {
      type: String,
      required: false
    },
    caption: {
      type: String,
      required: true
    },
    showCaption: {
      type: Boolean,
      default: true
    },
    imageURL: {
      type: String,
      required: true
    },
  },

  computed: {
    imageRequired () {
      return require(`../assets/images/${this.imageURL}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-item {
  margin: 0;
  font-size: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

figcaption {
  display: none;
}
</style>