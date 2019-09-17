<template>
  <figure>
    <img
      v-if="!disableResponsive"
      :srcset="require(`~/assets/images/${this.imageURL}`).srcSet"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
    <img
      v-else
      :srcset="require(`~/assets/images/${this.imageURL}?disable=true`).srcSet"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
  </figure>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    classes: {
      type: String
    },
    alt: {
      type: String
    },
    disableResponsive: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
figure {
  display: flex;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>