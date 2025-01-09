---
path: "/blog/why-itwin-sucks"
title: "Why iTwin sucks"
date: "2025-01-08"
---

### ECSQL sucks (overview)

- ECSQL is a great idea, SQL is a standard for data access
- using existing languages/standards -> better AI interop
- ***But***, ECSQL is held back by:
  - the choice to use JavaScript APIs to access a lot of simple data in iModels
    - project extents must be accessed through JavaScript, you couldn't write a
      query to find objects outside project extents without JavaScript!
    - you can't access Geometry and consequently Materials 
  - You query _iModels_, not iTwins. But you synchronize AEC files to iModels? Why is there
    this distinction? (worth noting, you can't even _view_ an iTwin (yet); iTwins
    were a workaround for limitations of bad design of iModels)
  - dynamic schemas make it so that one query doesn't work on two separate iModels
    if they both had the same (or slightly different version) IFC file synchronized to each.
  - there is too little tooling. You need a (visual) console. An LSP server. A linter.


If ECSQL were designed well, you could do amazing things!
Imagine in an iTwin viewer just using (AI-generated?) SQL to make visual reports:

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
const geom = new GeometryStreamIterator(elem.geometry);
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
  - exporting of geometry to another format

### iTwins vs. iModels

- iTwins are clearly a tacked-on distinction to make up for limitations of iModels.
- Why do you have to choose which iModel to synchronize design files to? Why can't you view multiple iModels
  at once?
- Why would you want to separate the viewing of them? Both should be visible in the viewport if you zoom out.
- You can't query multiple iModels, you can't query the "iTwin"
- dynamic schemas make querying separate iModels non-deterministic

### iTwin changes

- You can't access changes without "attaching a change cache" in JavaScript first.
- (visually) diffing iModels is slow and awkward to implement, it should be built-in
- you can't view a diff of an iModel between changes
- there is no branching (the existing implementation is data-loss bad)
- there is no merging (the existing implementation is data-loss bad)
- there is no way for a domain to validate changes
  - because of this, domains can't interact at all and therefore iTwins just aren't very valuable

### JavaScript sucks

You may have noticed a pattern. I don't love JavaScript. I like it.
Really what I don't like is that you need to always use both ECSQL and JavaScript, even for trivial things.

Overall, I think JavaScript was a bad choice for iTwin:
- not portable
  - native languages can be compiled to webassembly and ran in the browser, JavaScript requires a heavy
    runtime to embed in other environments
- very complex to embed in other environments
  - add >50MB node.js runtime to environments like game engines and mobile
  - node addon and node.js can be very complicated to build for common platforms like iOS which disable JIT
  - can embed using inter-process-communication which adds a lot of complexity and resource waste
- JavaScript is not good for performance-sensitive code
- iTwins use 64-bit ids which are hard to do right in JavaScript
- lots of effort wasted porting node.js and debugging+implementing IPC on different platforms

### The Transformer sucks

- the transformer could be 10x faster (I tested this)
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
  - Yes, this doesn't play well with domain handlers, but those were handled poorly anyway and I think you need
    to lift the domain constraint system anyway if you want to do that, see [domains][#domains-suck]

### Domains suck

- domains need to be loaded in JavaScript to take effect
- it is not an error to not have the js for a domain loaded while working with it,
  the default therefore is ignore all constraints
- sqlite-only behavior like changeset application ignores domain constraints
- domain handlers (js constraints) were abandoned by the only developers that really used them
- domain handlers are very slow because there is no way to check them in bulk or check groups of them
- impossible to access domain computed properties in lots of contexts

### Outliers

- Instead of using decades-old outlier detection algorithms while generating tiles or detecting extents,
  the display system refuses to generate tiles for things outside project extents
- project extents must be set by a project admin, usually once at project startup, regular users can't do anything
- this is horrible for visualization, e.g. people can't add background elements outside the extents,
  it will be visible in element lists, but never actually render, even if it's within the viewport!

### iTwin Studio sucks

- should not have its own APIs, iTwin core should own that
- should include a electron-like abstraction over itwin core libraries (mango)
- the product team and leadership and developers all have different ideas about it...
  someone needs to go and own the vision, and I for one like Keith's vision (it is a bit too visionary, but otherwise do:)
- if you don't want to be visionary, you could break it up into:
  - iTwin desktop framework
  - real iTwin core extensions
  - iTwin extension marketplace

### General leadership

- please build engineering leadership. You guys are working in silos and doing tons of wasted redundant work
  that just makes everyone mad at each other... you need more people looking at how this is designed end-to-end
- stop being afraid of breaking changes, how many iTwin customers are there actually to worry about?
