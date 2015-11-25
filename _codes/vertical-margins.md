---
layout: code
title: Vertical Margins
---

* Remove top and bottom margins from the first and last child elements respectively.

{% highlight css %}
/* remove outer vertical margins from outer elements */
* > :first-child { margin-top: 0!important; }
* > :last-child { margin-bottom: 0!important; }
{% endhighlight %}

<p data-height="268" data-theme-id="0" data-slug-hash="uAoCb" data-user="rodolfocaldeira" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/rodolfocaldeira/pen/uAoCb'>Timer</a> forked by Rodolfo Caldeira (<a href='http://codepen.io/rodolfocaldeira'>@rodolfocaldeira</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script src="http://codepen.io/assets/embed/ei.js"> </script>
