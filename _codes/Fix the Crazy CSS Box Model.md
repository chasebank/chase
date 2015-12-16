---
layout: code
title: Fix the Crazy CSS Box Model
description: Set everything to border-box, but let modular layouts easily overwrite it.
date:
date: 2015-12-10
---

This changes borders and padding to inset, so they don't add dimention to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.

<p data-height="268" data-theme-id="21051" data-slug-hash="zveoJb" data-default-tab="css" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/zveoJb/'>Image Guidelines</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>
