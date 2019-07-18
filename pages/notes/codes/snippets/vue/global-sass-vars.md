---
layout: code
title: Global SASS variables
description: 
date: 12/10/2015
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