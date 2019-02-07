---
layout: code
title: Responsive Inversion
description: 
created: 2015-12-10
category: css
---

It's easy enough to make things grow/shrink relative to the viewport, but I've had many times I wanted a value to respond in the oposite direction. For example, pushing something closer to the edge as the viewport shrinks.

This is similar to what I use for responsive typography, except a little more extensive and the values are just reversed. The main point here is you get to define the min/max of the "breakpoints", property and it's values, and wether they decrease or increase relative to the viewport.

I got this technique from [Luca Rosaldi](https://codepen.io/LucaRosaldi/pen/RgPbeR) and [David Bachmann](https://css-tricks.com/between-the-lines/)

<p class="codepen" data-height="300" data-theme-id="21051" data-default-tab="css,result" data-user="chasebank" data-slug-hash="aKMpeE" data-editable="true" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Inverse responsive">
  <span>See the Pen <a href="https://codepen.io/chasebank/pen/aKMpeE/">
  Inverse responsive</a> by Chase (<a href="https://codepen.io/chasebank">@chasebank</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
