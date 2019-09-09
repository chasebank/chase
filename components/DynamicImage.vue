<template>
  <div>
    <img
      :src="imageRequired"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
  </div>
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
  },

  computed: {
    imageRequired () {
      return require(`../assets/images/${this.imageURL}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>