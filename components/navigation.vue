<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #eee;
  position: fixed;
  top: 0;
  width: $fullWidth;
  height: $navHeight;
}
</style>
