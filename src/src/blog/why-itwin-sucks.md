---
path: "/blog/why-itwin-sucks"
title: "Why iTwin sucks"
date: "2025-01-08"
---

### ECSQL sucks (overview)

- ECSQL is a great idea, SQL is a standard for data access
- SQL also abstracts away the implementation so if someone finds a slow query, Bentley
  could work on making it faster without breaking API changes!
- using existing SQL language/standard -> better AI interop
- this brings iTwin close to a true data warehouse for AEC data!
- ***But***, ECSQL is held back by:
  - the choice to use JavaScript APIs to access a lot of simple data in iModels
    - many simple things like project extents must be accessed through JavaScript, you couldn't write a
      query to find objects outside project extents without JavaScript!
    - you can't access Geometry and consequently Materials 
    - most interesting calculations e.g. mass properties must be invoked from JavaScript and have no ECSQL function equivalent
  - You query _iModels_, not iTwins. But you synchronize AEC files to iModels? Why is there
    this distinction? (worth noting, you can't even _view_ an iTwin (yet); iTwins
    were a workaround for limitations of bad design of iModels)
  - dynamic schemas are so bad that one query might not work on two separate iModels
    even if they both had the same IFC file synchronized to each other!
  - there is too little tooling. You need a (visual) console, an LSP server, A linter, a diff tool


If ECSQL were designed well, you could do amazing things!
Imagine in an iTwin viewer just using (AI-generated?) ECSQL to make visual reports:

```sql
-- draw a rainbow gradient of pipe diameter
SELECT Gradient(Unlerp(Diameter, 0, 100), 'rainbow') AS ViewColor
FROM hydrology.Pipe
```

### Inspecting Geometry sucks

Inspecting Geometry sucks. It's doable these days, you can trod though some alpha APIs to access it
in JavaScript.

```ts
const elem = db.elements.getElement({ id, wantGeometry: true, wantBRepData: true, });
const geom = new GeometryStreamIterator(elem.geom);
for (const geomPiece of geom) {
    switch (geom.type) {
        //...
    }
}
```

Not so bad, eh? But:
- this makes ECSQL kind of useless
  - an ECSQL console couldn't access this data
- lots of things depend on the geometry obscured by this!
  You can't do simple queries about how much of a material is in an iModel
  (this makes the carbon calculation difficult to implement)

But why can't we do like:

```sql
/* get steel geometry */
SELECT ECInstanceId
FROM bis.GeometricElement3d ge3d
JOIN ec.GeometryStream gs ON gs.ECInstanceId=ge3d.ECInstanceId
JOIN bis.Material m ON m.ECInstanceId=gs.MaterialId
WHERE gs.Material.Name='Gold'
```

### Materials suck

- materials for geometry are not accessible via ECSQL
- if materials were easier to access, they might be easier to cross-reference with external data to do things like:
  - custom carbon calculation
  - interop with other formats

### iTwins vs. iModels

- iTwins are clearly a tacked-on distinction to make up for limitations of iModels.
- Why do you have to choose which iModel to synchronize design files to? Why can't you view multiple iModels
  at once in an iTwin?
- Why would you want to separate the viewing of them? Both should be visible in the viewport if you zoom out.
- You can't query multiple iModels, you can't query the "iTwin"
- dynamic schemas make querying separate iModels non-deterministic which destroys the usefulness of the query language

### iTwin changes

- You can't access changes without "attaching a change cache" in JavaScript first.
- (visually) diffing iModels is slow and awkward to implement, it should be built-in
- you can't view a diff of an iModel between changes
- there is no branching (the existing implementation is data-loss bad)
- there is no merging (the existing implementation is data-loss bad)
- there is no way for a domain to validate changes
  - because of this, domains can't interact at all and I think that destroys a lot of potential value
    in an iTwin (I am not an expert in cross-domain interaction, but I think it's possible)

### JavaScript sucks

You may have noticed a pattern. I don't love JavaScript. But I _do_, like it.
Really what I don't like is that you need to always use both ECSQL and JavaScript, even for trivial things.

Overall, I think JavaScript was a bad choice for iTwin:
- not portable
  - native languages can be compiled to webassembly and ran in the browser, JavaScript requires a heavy
    runtime to embed outside the browser
- very complex to embed in other environments
  - add ~100MB node.js runtime to environments like game engines and mobile
  - node addon and node.js can be very complicated to build for common platforms like iOS which disable JIT
  - can embed using inter-process-communication which adds a lot of complexity and high overhead
- JavaScript is not good for performance-sensitive code
- iTwins use 64-bit ids which are hard to do performantly in JavaScript
- lots of effort wasted porting node.js and debugging+implementing IPC on different platforms

### The Transformer sucks

- the transformer could be 10x faster (I proved this in an existing branch of iTwin)
  and far less buggy code if implemented by lowering to sqlite, the way the rest of ECSQL works:

  ```sql
  ATTACH 'target.db' as target

  -- upsert all non-geometric3d elements from source to target
  INSERT INTO target.bis.Element
  SELECT *
  FROM main.bis.Element
  WHERE ECClassId IS NOT (main.bis.GeometricElement3d)
  ON CONFLICT(FederationGuid) SET *

  -- upsert all geometric elements and shift origin.x by +100
  INSERT INTO target.bis.GeometricElement3d(Origin, *)
  SELECT Origin + Point3d(100, 0, 0), *
  FROM main.bis.GeometricElement3d
  ON CONFLICT(FederationGuid) SET *
  ```

  - NOTE: I do not endorse the exact syntax above, just demonstrating how it might look. This is not far from
    real standard SQL syntax.
  - Yes, this doesn't play well with domain handlers, but those need to be redesigned anyway, and I think you need
    to hoist the domain constraint system out of JavaScript and into ECDB anyway

### Domains suck

- domains need to be loaded in JavaScript to take effect
- it is not an error to not have the JS for a domain loaded while working with it,
  the default therefore is ignore all constraints
- sqlite-only behavior like changeset application ignores domain constraints
- domain handlers (JS constraints) were abandoned by many developers of editing apps that really used them
- domain handlers are very slow because there is no way to check them in bulk or check groups of them
- impossible to access domain computed properties in lots of contexts

### Outliers

- Instead of using decades-old outlier detection algorithms while generating tiles or detecting extents,
  the display system refuses to generate tiles for things outside project extents
- project extents must be set by a project admin, usually once at project startup, regular users can't do anything
  but wait for an admin
- this is horrible for visualization, e.g. people can't add background elements outside the extents,
  it will be visible in element lists, but never actually render, even if it's within the viewport!
- this is a solved problem in almost every other viewer! Just generate tiles for it on-demand if it's taking
  up enough pixel space in the view frustrum!

### Engineering leadership

I won't go deep into this, but I have seen structural reasons that Bentley wastes a lot of time
and resources building things poorly and shooting its own feet, there is a lot of siloing and a
lack of central planning, especially on the engineering side. IMO this is one of the most pressing
issues for organizational health and ability to deliver.

