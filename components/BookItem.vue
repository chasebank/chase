<template>
  <article class="book">
    <img :src="book.cover" :alt="`Image of the ${book.title} book cover`" class="book-cover">

    <h4 class="book-title">{{ book.title }}</h4>

    <details class="rating-details" ref="review" v-if="book.rating">
      <summary class="rating-summary">
        <svg class="expand-rating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 50.9"><path d="M0 0l51 25.5L0 50.9V0z"/></svg>
        <svg class="rating-stars" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
          <title>View my short review</title>
          <defs>
            <path id="def-star" d="M100 10L121.246 78.7539H190L134.377 121.246L155.623 190L100 147.508L44.3769 190L65.6231 121.246L10 78.7539H78.7539L100 10Z" stroke-width="inherit" stroke="inherit"/>

            <g id="def-stars">
              <use xlink:href="#def-star" x="0" y="0" />
              <use xlink:href="#def-star" x="200" y="0" />
              <use xlink:href="#def-star" x="400" y="0" />
              <use xlink:href="#def-star" x="600" y="0" />
              <use xlink:href="#def-star" x="800" y="0" />
            </g>
          </defs>

          <use class="rating-stars--bg" xlink:href="#def-stars" stroke-width="8" />

          <svg :x="`-${rating}`" class="rating-stars--el">
            <use xlink:href="#def-stars" stroke-width="10" :transform="`translate(${rating},0)`" fill="inherit"></use>
          </svg>
        </svg>
      </summary>
      <div class="rating-notes" v-html="book.__content"></div>
    </details>

    <span class="book-authors">by {{ book.authors }}</span>
    <!-- <div class="book-content" v-html="book.__content"></div> -->
  </article>
</template>

<script>
export default {
  props: ['book'],

  mounted() {
    this.$el.style.setProperty('--bookHue', this.book.hue);
  },

  computed: {
    rating() {
      if (this.book.rating) {
        return `${1000 - (this.book.rating / .005)}`
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
$darkColor: #{hsl(var(--bookHue),100%,3%)};
$baseColor: #{hsl(var(--bookHue),100%,68%)};
$lightColor: #{hsl(var(--bookHue),100%,95%)};



$padding: calc(1% + 1rem);
.book {
  padding: $padding $padding $padding calc(#{$padding} * 6);
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
    top: 2px;
    left: 4%;
    width: 92%;
    // left: 2px;
    // width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: $darkColor;
    border-radius: 40px;
    // box-shadow: 0 1rem 2rem -2rem $baseColor;
    filter: drop-shadow(0 .4rem .5rem $baseColor);
    opacity: .2;
  }

  &:after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $darkColor;
    @include squircleMask(60);
  }
}


.book-cover {
  position: absolute;
  width: calc(#{$padding} * 4);
  height: auto;
  left: $padding;
  display: block;
  // box-shadow: 0rem .5rem 1.5rem -1rem $baseColor;
}

.book-title {
  color: white;
  color: $lightColor;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

.book-authors {
  font-size: 1rem;
  font-style: italic;
  color: $baseColor;
  font-style: italic;
  order: 2;
}



.rating-details {
  display: inline-block;
  order: 3;
  align-self: flex-start;
  padding: .2rem;
  margin-top: -.1rem;
  margin-left: -.2rem;
}

.rating-summary {
  display: flex;
  align-items: center;
  position: relative;
  left: -.1rem;
  cursor: pointer;

  //increase hitbox
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin-top: -.25rem;
  margin-bottom: -.25rem;
  
  // hide defualt arrow in chrome
  list-style-type: none;
  // https://stackoverflow.com/questions/6195329/how-can-you-hide-the-arrow-that-is-displayed-by-default-on-the-html5-details-e/6202729#6202729
  &::-webkit-details-marker {
    display: none;
  }
  
  // &:before {
  //   position: relative;
  //   top: 2px;
  //   display: block;
  //   content: '';
  //   height: 1em;
  //   width: 1em;
  //   // background-color: yellow;
  //   // background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51 50.9'%3E%3Cpath d='M0 0l51 25.5L0 50.9V0z' fill='"$baseColor"'/%3E%3C/svg%3E");
  //   background-repeat: no-repeat;
  //   background-position: center center;
  //   background-size: 65%;
  //   color: $baseColor;
  //   // padding-right: .1em;
  //   transform-origin: 50% 50%;
  //   transition: transform .3s, color .3s;
  // }
}

.expand-rating-icon {
  // display: inline-block;
  position: relative;
  top: 2px;
  // background: yellow;
  height: .6em;
  width: 1em;
  line-height: 1em;
  fill: $baseColor;
  transform: translate3d(0,0,1px);
  transform-origin: 50% 50%;
  transition: transform .3s, color .3s;
}

.rating-notes {
  display: block;
  position: absolute;
  margin-left: calc(-1 * #{$padding});
  box-sizing: initial;
  z-index: 1;
  background-color: $darkColor;
  padding: 1.5rem 1rem 1rem 1rem;
  color: $lightColor;
  margin-top: -1rem;

  font-size: 14px;
  line-height: 1.8;

  /deep/ p:first-of-type {
    margin-top: 0;
  }

  /deep/ p:last-of-type {
    margin-bottom: 0;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 2%;
    width: 96%;
    height: calc(100% - 2rem);
    background-color: inherit;
    filter: drop-shadow(0 0 .75rem $baseColor);
    z-index: -1;
    opacity: .5
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    z-index: -1;
  }
}

.rating-details[open] {
  
  .rating-summary {
    z-index: 2;
  }

  +.book-authors {
    z-index: 2;
  }

  .expand-rating-icon  {
    fill: $lightColor;
    top: 2px;
    transform: translate3d(0,0,1px) rotate(90deg) 
  }
  
  .rating-notes {
    animation: fadeSlideDetails .3s forwards;
  }
}
@keyframes fadeSlideDetails {
  from {
    opacity: 0;
    transform: translate3d(0,-1rem,0);
  }
  25% {
    opacity: 0;
    transform: translate3d(0,-1rem,0);
  }
  to {
    opacity: 1;
    border-top-color: red;
    transform: translate3d(0,0,0);
  }
}

.rating-stars {
  display: block;
  height: 1rem;
  width: auto;
  align-self: flex-start;
}

.rating-stars path {
  fill: inherit;
}

.rating-stars--bg {
  fill: $baseColor;
  stroke: $baseColor;
  opacity: .4;
}

.rating-stars--el {
  fill: $baseColor;
  stroke-width: 0;
}
</style>