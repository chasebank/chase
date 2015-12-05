---
layout: code
title: The Lobotomized Owl Selector Selector
description: Add a line break between succeeding elements.
---

The + adjacent sibling selector targets an element that follows another element. x + y will target y _only_ if it follows x. The * universal selector targets _everything_ &lt;queue evil laghter/&gt;.

So * + * targets everything, as long as it follows something else... It sounds like the screenplay for [Inception](http://www.imdb.com/title/tt1375666/), but it works.

Add a top margin to that selector, and you have a nice consistent margin *between* all of your elements. It can be easily overwritten if needed without the use of !important since the specificity will be greater. No margin between elements tends to be the exception, not the rule, so it makes much more sense to default a margin and be done with it.

Heydon Pickering named this the "Lobotomized Owl Selector" due to it's emote resemblance to... a dead bird. And contrary to popular belief, [this is not a resource hog](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls "A List Apart - Axiomatic CSS and Lobotomized Owls"). Welcome to the future.

{% highlight css %}
// Add a line break between succeeding elements
* + * { margin-top: 1.5em }
{% endhighlight %}
