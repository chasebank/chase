---
layout: code
title: One Code to Rule Them All
---

I think this is a well-rounded starter for _most_ projects. Just a bunch of useful stuff I've stumbled onto, lifted from some random corner of the interwebs, or discovered myself through blood sweat and tears. I inevitably use it all, so I packed it up neat in a box.

It all seems to make sense and work well, but <a href="{{ site.baseurl }}/contact/">let me know</a> if you have something better.

<p class="example">What's in the box! (click each for explenation)</p>

<dl>
  <dt>Declare the root font size of 10px.</dt>
  <dd>I don't like math. I also don't like em units, except in certain situations where their cascading nature adds simplicity, rather than complexity. rem units reference the root font size, so 1rem has the same value everywhere, regardless of context. With a root font size of 10px, math is easy. 1.6rem = 16px</dd>
  <dt>Set everything to border-box, but let modular layouts easily overwrite it.</dt>
  <dd>Fixes the stupid css box model. Border and padding changes to inset, rather than add to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some crazy reason a different box-sizing is needed later on, the new declaration will cascade to it's children.</dd>

  <dt>Add a line break between succeeding elements.</dt>
  <dd><p>The + adjacent sibling selector targets an element that follows another element. x + y will target y <em>only</em> if it follows x. The * universal selector targets <em>everything</em> &#60;queue evil laghter/&#62;.</p>

<p>So * + * targets everything, as long as it follows something else. Add a top margin to it, and you have perfect line spacing between elements.</p>

<p>Heydon Pickering named this the "Lobotomized Owl Selector" due to it's emote resemblance to... a dead bird. And contrary to popular belief, <a href="http://alistapart.com/article/axiomatic-css-and-lobotomized-owls" title="A List Apart - Axiomatic CSS and Lobotomized Owls" target="_blank">this isn't a resource hog</a>. Welcome to the future.</p></dd>

  <dt>Media query mixins to quickly target <em>relatively</em> common break points.</dt>
  <dd><p>Useful for quickly blocking out layouts and prototypes.</p>
  <p class="example">Usage example:</p>
{% highlight css %}
div {
  width: 80%;

  @media @mobile { width: 100% }
}
{% endhighlight %}</dd>

  <dt>Justified Grid</dt>
  <dd><p>I haven't played with Bourbon Neat yet (can't beat that name!), but justified grids are easy to implement and just work. The concept is to use the powers of paragraph justification for natural equal space between elements (gutters).</p>
  <p>When element widths add up to less than 100%, blank space naturally flows between them for equal distribution across the entire line/row. When elements add up to more than 100%, they automatically wrap to the next line, just like words at the end of a paragraph. No messy gutter mischief. No extra mark up. Grid 'cells' don't have to be wrapped in container rows. The rows create themselves through the natural flow.</p>
  <p>The only downside, if there is any, is blank space in the mark up throws off the justification. But setting the font size of the grid's parent to zero solves this. Some people have a problem with that, but I don't. rem units makes it a non-issue.</p>
  <p class="example">Usage example:</p>
<p data-height="206" data-theme-id="21051" data-slug-hash="5606ffef961c31272d33e1fa93e0cbfb" data-default-tab="css" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/5606ffef961c31272d33e1fa93e0cbfb/'>Justified Grid Example</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</dd>
</dl>

<p data-height="504" data-theme-id="21051" data-slug-hash="bb90a9c7817321dde8cae6c6de93185f" data-default-tab="css" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/bb90a9c7817321dde8cae6c6de93185f/'>One Code to Rule Them All</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>
