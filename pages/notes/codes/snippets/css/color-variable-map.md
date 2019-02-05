---
layout: code
title: Color Variable Map
description: Use SASS maps for managing color variables
created: 2016-11-21
category: css
---

A useful mixin for centralizing color variables in a SASS Map. Helps keep color standardized and consistent.

I learned this from [Jake Albaugh](http://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps).


<div class="codepen" data-height="300" data-theme-id="21051" data-default-tab="css,result" data-user="chasebank" data-slug-hash="KbrWdv" data-prefill='{"title":"Masonry with Colcade","tags":[],"stylesheets":[],"scripts":["https://unpkg.com/colcade@0/colcade.js"]}'>
<pre data-lang="scss" data-option-autoprefixer>
// color variable map
$colors: (
  // non-nested values
  text: #FFF,
  background: #333,
  // nested map inception
  primary: (
    base: #FFBB00,
    light: lighten(#FFBB00, 15%),
    dark: darken(#FFBB00, 15%),
  ),
  secondary: (
    base: #0969A2,
    light: lighten(#0969A2, 15%),
    dark: darken(#0969A2, 15%),
  )
);

// retrieve color from $colors map ie. `color(base, primary)`
@function color($color-name, $color-variant:null) {
  // color variant is optional
  @if ($color-variant !=null) {
    // map inception
    @return map-get(map-get($colors, $color-name), $color-variant);
  }
  @else {
    @return map-get($colors, $color-name);
  }
}

// using the function to get a non-nested color
body {
  background-color: color(background);
}

// using the function to get a nested map color
h1 {
  color: color(primary, base);
  border-bottom: .1em solid rgba(color(secondary, base), .5);
}
</pre>
</div>
