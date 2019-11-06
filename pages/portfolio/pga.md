---
title: PGA
description: Holiday Card, Photo Composite
projectHighlights: [
  'Designed a holiday/golf themed greeting card.',
  'Digitally combine multiple photo elements to create a seamless composite.'
  ]
created: 2017-10-01T08:01:50+02
---

<!-- <ul class="project-highlights">
  <li>Designed a holiday/golf themed greeting card.</li>
  <li>Digitally combine multiple photo elements to create a seamless composite.</li>
</ul> -->

### About the PGA

The Professional Golfer’s Association of America (PGA) is one of the world’s largest sports organizations, working to grow interest and participation in the game of golf.

### What I worked on

I was asked to create a holiday card that captures both the holiday spirit and the joys of playing golf. My idea was to show a golf course scene, under a light winter’s snow. The holidays are a time to enjoy the things you love with the ones you love - in this case, playing golf (come rain, shine, or snow!)

### The Process

To get the ‘winter wonderland’ scene that I imagined, a full photo composite was needed. Multiple photos and elements were digitally combined to create the final scene and mood.

This included realistically imposing the PGA logo onto a golf ball, intended for the main focal point.

<photoswipe-gallery :singleImage="true">
  <photoswipe-image
    imageURL="projects/pga/pga--elements.jpg"
    :classes="'large'"
    :caption="'Some of the photo elements used in the composition'" />
</photoswipe-gallery>

This was done using a “displacement map”, to warp and distort the logo around the contours of the golf ball’s dimpled surface, along with lighting adjustments laid overtop of the logo, to preserve the detail of the shadows and highlights.

### A closer look

#### Digitally imprinting the PGA logo onto the golf ball

I wanted this to look realistic, with the logo following the same shadows, highlights, and contours of the golf ball’s dimpled surface.

This was a great use-case of a “displacement map”, which is similar to an image mask, where portions of an image are hidden/revealed based on black/white values in the mask. Except a displacement map uses those black/white values to distort an image.
It’s great for warping graphics around the contours of t-shirt wrinkles or a waving flag, for example. The results can be pretty convincing for minimal effort.

#### Example:
<photoswipe-gallery :singleImage="true">
  <photoswipe-image
    imageURL="projects/pga/pga--displacement-map-example.jpg"
    :classes="'large'"
    :caption="'An example of distorting an American Flag graphic, in a way that mimics the contours of a t-shirt surface, using a displacement map'" />
</photoswipe-gallery>

Best results come when there’s high (but uniform) contrast, so often a special grayscale displacement map is created from the original source image. I also often create a sort of “light map” to apply overtop the distorted graphic, to bring back some of the underlying shadows, highlights and texture.

<photoswipe-gallery :gallery="true" :fullWidth="true">
  <photoswipe-image
    imageURL="projects/pga/pga--golfball-progression.jpg"
    :disableResponsive="true"
    :caption="'Progression of creating the golfball with PGA logo'" />
</photoswipe-gallery>

Then I painted some blades of grass and shadows, to make it look like the golf ball was snuggly resting *in* the grass, rather than overtop of it.

#### Creation process video:

<photoswipe-gallery :singleImage="true">
  <div class="grid-item large">
    <iframe src="https://player.vimeo.com/video/137291395?color=2ECEF1&byline=0&portrait=0" id="pga-process" width="500" height="664" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
</photoswipe-gallery>

### Gallery

<photoswipe-gallery :gallery="true" :fullWidth="true">
  <photoswipe-image
    imageURL="projects/pga/pga--closeup.jpg"
    :disableResponsive="true"
    :classes="'tall'"
    :caption="'Closeup of the finished golf ball'" />
    <photoswipe-image
    imageURL="projects/pga/pga--card-design.jpg"
    :classes="'medium'"
    :caption="'The final design'" />
    <photoswipe-image
    imageURL="projects/pga/pga--card.jpg"
    :classes="'medium'"
    :caption="'The final product, printed and folded'" />
</photoswipe-gallery>