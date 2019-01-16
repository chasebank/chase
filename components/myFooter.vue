<template>
  <footer>
    <span>FOOTER</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;

  box-shadow: inset 0 0 1rem 1rem blue;
  // transition: transform .4s
}

.move-footer-down {
  transition: transform .6s;
  position: fixed;
  transform: translate3d(0,100%,0);
}

.move-footer-up {
  transition: transform .4s;
  position: fixed;
  top: 100%;
  bottom: initial;
  transform: translate3d(0,-100%,0);
}

@keyframes moveFooterDown {
  from { transform: translate3d(0,0%,0) }
  from { transform: translate3d(0,-100%,0) }
}

@keyframes moveFooterUp {
  from { transform: translate3d(0,0%,0) }
  from { transform: translate3d(0,-100%,0) }
}
</style>
