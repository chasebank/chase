---
layout: code
title: One Code to Rule Them All
---
What I start most of my projects with. Mostly just useful stuff I've stumbled on that I inevidtably use anyway.

In order - click for more info:

<dl>
  <dt>Set border-box on all elements, but let modular styles overwrite it.</dt>
  <dd>Fixes the un-intuitive box model. Border and padding insets, rather than add to a defined height/width.</dd>

  <dt>Remove top and bottom margins from the first and last child elements respectively.</dt>
  <dd></dd>

  <dt>Media query mixins to quickly target <em>relatively</em> common break points.</dt>
  <dd>Useful for quickly blocking out layouts and prototypes. Usage example: `@media @mobile`</dd>

  <dt>Justified Grid</dt>
  <dd><p>I haven't played with Bourbon Neat yet (killer name!), but justified grids are easy to implement and just tend to work. The idea is to use the powers of paragraph justification for natural equal space between elements (gutters).</p>
  <p>When elements widths add up to less than 100%, blank space naturally flows between them for equal distribution. When elements add up to more than 100%, they automatically wrap, just like words at the end of a paragraph, while the remaining elements again space out to take up the entire row. No messy gutter mischief. No extra mark up. Grid 'cells' don't have to be wrapped in container rows. The rows create themselves naturally.</p>
  <p>The only downside, if there is any, is blank space in the mark up throws off the justification. But setting the font size of the grid's parent to zero solves this. Some people have a problem with that, but I don't. rem units makes it a non-issue.</p></dd>
</dl>


{% highlight css %}
/* apply a natural box layout model to all elements, but allow components to change */
html  { box-sizing: border-box; }
*,
*:before,
*:after { box-sizing: inherit; }


/* remove outer vertical margins from outer elements */
* > :first-child { margin-top: 0!important; }
* > :last-child { margin-bottom: 0!important; }


// Breakpoints
// Source: http://blog.scur.pl/2012/06/variable-media-queries-less-css/
@highdensity: ~"only screen and (-webkit-min-device-pixel-ratio: 1.5)",
              ~"only screen and (min--moz-device-pixel-ratio: 1.5)",
              ~"only screen and (-o-min-device-pixel-ratio: 3/2)",
              ~"only screen and (min-device-pixel-ratio: 1.5)";
@phone:       ~"only screen and (max-width: 529px)";
  @notPhone:  ~"only screen and (min-width: 530px)"; // Everything bigger than phone
@tablet:      ~"only screen and (min-width: 530px) and (max-width: 768px)";
@mobile:      ~"only screen and (max-width: 768px)"; // Phones and Tablets
  @notMobile: ~"only screen and (min-width: 769px)"; // Everything bigger than phone and tablet
@desktop:     ~"only screen and (min-width: 769px) and (max-width: 1128px)";
@desktop-xl:  ~"only screen and (min-width: 1129px)";


/*  THE GRID justifygrid.com  */
@columns: 12;
@column-width: 4em;
@gutter-width: 1.2em;
@support-old-ie: false;

#grid() {
  text-align: justify !important;
  text-justify: distribute-all-lines;
  font-size: 0 !important;
  & > * {
    text-align: left;
    font-size: medium;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
  .cell() {
    vertical-align: top;
    display: inline-block;
    width: 100%;
  }
  .span(@cols, @total: @columns) {
    width: percentage((@column-width * @cols + @gutter-width * (@cols - 1)) / (@column-width * @total + @gutter-width * (@total - 1)));
    margin-bottom: 1.9%;
  }
  .push(@cols, @total: @columns) {
    left: percentage((@column-width + @gutter-width) * @cols / (@column-width * @total + @gutter-width * (@total - 1)));
  }
  .pull(@cols, @total: @columns) {
    left: percentage((@column-width + @gutter-width) * -@cols / (@column-width * @total + @gutter-width * (@total - 1)));
  }
  .prepend(@cols, @total: @columns) {
    margin-left: percentage((@column-width + @gutter-width) * @cols / (@column-width * @total + @gutter-width * (@total - 1)));
  }
  .append(@cols, @total: @columns) {
    margin-right: percentage((@column-width + @gutter-width) * @cols / (@column-width * @total + @gutter-width * (@total - 1)));
  }
}
{% endhighlight %}
