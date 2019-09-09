<template>
  <figure :class="classes" class="grid-item gallery-image" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a :href="imageRequired" itemprop="contentUrl" title="View larger image">
      <img
        :src="imageRequired"
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
      // return `/images/projects/feastbeast/feastbeast--ref.jpg`
      // return 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/feastbeast--measurements.jpg'
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