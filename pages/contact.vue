<template>
  <main>
    <div class="content">
      <h1><span>Email</span><span>me</span></h1>

      <p>Thanks so much for visiting my site! If you'd like to get in touch with me, please use the form below.</p>
      
      <div id="wufoo-rju92v0267kmo">
        Fill out my <a href="https://chasew.wufoo.com/forms/rju92v0267kmo">online form</a>.
      </div>
      
      <script type="text/javascript">var rju92v0267kmo;(function(d, t) {
      var s = d.createElement(t), options = {
      'userName':'chasew',
      'formHash':'rju92v0267kmo',
      'autoResize':true,
      'height':'500',
      'async':true,
      'host':'wufoo.com',
      'header':'show',
      'ssl':true};
      s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'secure.wufoo.com/scripts/embed/form.js';
      s.onload = s.onreadystatechange = function() {
      var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
      try { rju92v0267kmo = new WufooForm();rju92v0267kmo.initialize(options);rju92v0267kmo.display(); } catch (e) {}};
      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
      })(document, 'script');</script>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'

export default {
  mixins: [pageMixin],

  meta: {
    depth: 10
  },

  components: {
    LongContent
  },

  data: () => ({
    pageTitle: 'Contact',
  })
}
</script>

<style lang="scss" scoped>
h1 span:nth-child(2) {
  left: 30%;
}

</style>
