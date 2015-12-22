---
layout: code
title: One Code to Rule Them All
description: I think this is a well-rounded starter for <em>most</em> projects.
date: 2015-12-11
category: codes
---

This isn't a [boilerplate](https://html5boilerplate.com/) or framework. It's just some stuff I find myself inevitably useing in all projects, so I packed 'em up neat in a box.

<p class="example">What's in the box! <small><em>(click each for explenation)</em></small></p>

<dl>
  <dt>Declare a root font size of 10px - Make math easy</dt>
  <dd>I don't like math. I also don't like em units, except in certain situations where their cascading nature adds simplicity, rather than complexity. rem units reference the root font size, so 1rem has the same value everywhere, regardless of context. With a root font size of 10px, math is easy. 1.6rem will always = 16px</dd>

  <dt>Fix the crazy CSS box model - Set everything to border-box</dt>
  <dd>This changes borders and padding to inset, so they don't add dimention to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.</dd>

  <dt>The Lobotomized Owl Selector Selector - Add a line break between succeeding elements</dt>
  <dd><p>The + adjacent sibling selector targets an element that follows another element. x + y will target y <em>only</em> if it follows x. The * universal selector targets <em>everything</em> &lt;queue evil laghter/&gt;.</p>

<p>So * + * targets everything, as long as it follows something else... Sounds like the plot for the movie <a href="https://www.youtube.com/watch?v=V3-a58Wt2tk">Inception</a>, but it really does work.</p>

<p>Heydon Pickering named this the "Lobotomized Owl Selector" because as an emote, it sorta looks like... a dead bird...</p>

<p>And contrary to popular belief, <a href="http://alistapart.com/article/axiomatic-css-and-lobotomized-owls" title="A List Apart - Axiomatic CSS and Lobotomized Owls" target="_blank">this is not a resource hog</a>. Welcome to the future.</p></dd>

  <dt>Media query mixins - Quickly target <em>relatively</em> common break points</dt>
  <dd><p>Useful for quickly blocking out layouts and prototypes.</p>
  <p class="example">Usage example:</p>

<div class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">div</span> <span class="p">{</span>
  <span class="k">width</span><span class="o">:</span> <span class="m">80%</span><span class="p">;</span>

  <span class="o">@</span><span class="n">media</span> <span class="o">@</span><span class="n">mobile</span> <span class="err">{</span> <span class="k">width</span><span class="o">:</span> <span class="m">100%</span> <span class="p">}</span>
<span class="err">}</span></code></pre></div>
</dd>

  <dt>Justified Grid</dt>
  <dd><p>I haven't played with <a href="http://neat.bourbon.io/">Bourbon Neat</a> yet (can't beat that name!), but justified grids are easy to implement and just work. The concept is to use the powers of paragraph justification for natural equal space between elements (gutters).</p>
  <p>When element widths add up to less than 100%, blank space naturally flows between them for equal distribution across the entire line/row. When elements add up to more than 100%, they automatically wrap to the next line, like words at the end of a paragraph. No messy gutter mischief. No extra mark up. Grid 'cells' don't have to be wrapped in container rows. The rows create themselves through natural flow.</p>
  <p>The only downside, if there is any, is blank space in the mark up throws off the justification. But setting the font size of the grid's parent to zero solves this. Some people have a problem with that, but I don't. rem units makes it a non-issue.</p>
  <p>My version is tailored for how I work, but more details and a neat grid builder can be found at <a href="http://justifygrid.com/">justifygrid.com/</a></p>
  <p class="example">Usage example:</p>
<div><iframe id="cp_embed_5606ffef961c31272d33e1fa93e0cbfb" src="//codepen.io/chasebank/embed/5606ffef961c31272d33e1fa93e0cbfb?height=206&amp;theme-id=21051&amp;slug-hash=5606ffef961c31272d33e1fa93e0cbfb&amp;default-tab=css&amp;user=chasebank" scrolling="no" frameborder="0" height="206" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>
</dd>
</dl>

<p data-height="568" data-theme-id="21051" data-slug-hash="bb90a9c7817321dde8cae6c6de93185f" data-default-tab="css" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/bb90a9c7817321dde8cae6c6de93185f/'>One Code to Rule Them All</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>
