---
layout: code
title: Color Variable Map
description: Use SASS maps for managing color variables
created: 2016-11-21
category: css
---

This is a useful mixin for referencing some centralized color variables in a SASS Map. The nesting nature of the map also helps encourage more clear standards for color variations.

I learned this technique from [Jake Albaugh](http://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps).

<div 
  class="codepen" 
  data-prefill='{
    "title": "React Basics Demo",
    "description": "Shows how to use React and React DOM to render a module with props onto the page",
    "tags": ["react", "react-docs-demo"],
    "html_classes": ["loading", "no-js"],
    "head": "&lt;meta name=&#x27;viewport&#x27; content=&#x27;width=device-width, initial-scale=1&#x27;&gt;",
    "stylesheets": "https://unpkg.com/normalize.css@8.0.1/normalize.css",
    "scripts": ["https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js", "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"]
  }'
  style="height: 400px; overflow: auto;"
  data-height="400" 
  data-theme-id="31205"
  data-default-tab="js,result" 
  data-editable="true"     
  style="height: 400px; overflow: auto;"
>
  <pre data-lang="html">
    &lt;div id="root"&gt;&lt;/div&gt;
  </pre>
  <pre data-lang="scss">
    $gray: #ccc;
    body {
      background: $gray;
      margin: 0;
      padding: 1rem;
    }
    .module {
      background: white;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid #999;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
      h1 {
        margin: 0 0 1rem 0;
      }
    }
  </pre>
  <pre data-lang="babel">
    class Welcome extends React.Component {
      render() {
        return &lt;div class="module"&gt;
          &lt;h1&gt;
            Hello, {this.props.name}
          &lt;/h1&gt;
          &lt;p&gt;It's a good day to build websites.&lt;/p&gt;
        &lt;/div&gt;;
      }
    }
    ReactDOM.render(
      &lt;Welcome name="Chris"&gt;&lt;/Welcome&gt;,
      document.getElementById('root')
    );
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!-- <p data-height="300" data-theme-id="26404" data-slug-hash="oYZPvg" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Color Variable Map" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/oYZPvg/">Color Variable Map</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> -->