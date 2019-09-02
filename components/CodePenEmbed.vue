<template>
  <div class="codepen"
       :data-height="height"
       :data-theme-id="themeID"
       :data-default-tab="defaultTabs"
       :data-user="dataUser"
       data-editable="true"
       :data-prefill='`"title":${title},"tags":${tags},"head":${head},"stylesheets":${stylesheets},"scripts":${scripts}`'>
    <pre><slot name="html" :data-lang="jsLang"></slot></pre>

    <pre><slot name="css" :data-lang="cssLang" data-option-autoprefixer></slot></pre>

    <pre><slot name="js" :data-lang="jsLang"></slot></pre>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: Number,
        default: 300
      },

      themeID: {
        type: Number,
        default: 21051,
      },

      defaultTabs: {
        type: String,
        default: "html,css,result"
      },

      dataUser: {
        type: String,
        default: "chasebank"
      },

      title: {
        type: String
      },

      tags: {
        type: Array
      },

      head: {
        type: String,
        default: '<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">'
      },

      styleSheets: {
        type: Array
      },

      scripts: {
        type: Array
      },

      htmlLang: {
        type: String
      },

      cssLang: {
        type: String
      },

      jsLang: {
        type: String
      }

      // defaultTabs: {
      //   type: Array,
      //   default: () => (),
      // }
    }
  }
</script>

<style lang="scss" scoped>

</style>