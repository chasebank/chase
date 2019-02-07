---
layout: code
title: Fix the Crazy CSS Model
description: Set everything to border-box, but let modular layouts easily overwrite it.
created: 2015-12-10
category: css
---

Change borders and padding to inset, so they don't affect height/width.

100px width + 10px padding + 2px border = 100px.

Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.

<p class="codepen" data-height="300" data-theme-id="21051" data-default-tab="css" data-user="chasebank" data-slug-hash="JbWBzQ" data-editable="true" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Fix the Crazy CSS Box Model">
  <span>See the Pen <a href="https://codepen.io/chasebank/pen/JbWBzQ/">
  Fix the Crazy CSS Box Model</a> by Chase (<a href="https://codepen.io/chasebank">@chasebank</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
