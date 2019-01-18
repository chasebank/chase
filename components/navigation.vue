<template>
  <nav>
    <button @click="$router.go(-1)">Back</button>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </nav>
</template>

<script>
export default {
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: rgba(#eee,.5);
  position: fixed;
  top: 0;
  width: $fullWidth;
  height: $navHeight;

  z-index: 1;
}
</style>
