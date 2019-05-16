---
layout: code
title: Global SASS variables
description: 
created: 2015-12-10
category: vue
---

in vue.config.js
```
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/_bitsnpieces.scss";`
      }
    }
  },
}
```