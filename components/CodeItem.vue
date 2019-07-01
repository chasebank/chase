<template>
  <article class="code">
    <h4 class="title">{{ code.title }}</h4>
    <p class="description">{{ code.description }}</p>
  </article>
</template>

<script>
export default {
  props: ['code'],
}
</script>

<style lang="scss" scoped>
$padding: calc(1% + 1rem);
.code {
  // position: relative;
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    z-index: -1;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 2px;
    left: 4%;
    width: 92%;
    height: calc(100% - 4px);
    background-color: #020e0f;
    border-radius: 40px;
    filter: drop-shadow(0 .4rem .5rem color(highlight));
    opacity: .2;
  }

  &:after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1517;
    background:
      linear-gradient(to bottom, rgba(#020e0f,.6), #020e0f 100px),
      url(http://cha.se.net/public/img/codes-bg.gif) top right no-repeat,
      #121c1f;
    @include squircleMask(60);
  }
}

.title {
  color: white;
  color: color(light);
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

.description {
  margin-bottom: 0;
  margin-top: .4rem;
  line-height: 1.4;
  color: color(mid);
}
</style>