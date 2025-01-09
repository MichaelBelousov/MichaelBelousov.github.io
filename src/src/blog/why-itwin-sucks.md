---
path: "/blog/why-itwin-sucks"
title: "Why iTwin sucks"
date: "2025-01-08"
---

### ECSQL sucks

I love SQL, I think ECSQL is a great idea... it turns your architecture into

### Inspecting Geometry sucks

I'll start with something simple.

Inspecting Geometry sucks. It's doable these days, you can trod though some alpha APIs to access it
in JavaScript.

```ts
const elem = db.elements.getElement({ id, wantGeometry: true, wantBRepData: true, });
const geom = new GeometryStreamIterator(elem.geometry);
```

But did you know that this is where materials are stored? 

### Materials suck

### iTwins vs. iModels

### iTwin changes

### JavaScript sucks

### Domains suck

### The Transformer sucks

### Catalog placement sucks
