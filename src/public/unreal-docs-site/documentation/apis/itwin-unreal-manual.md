# iTwin Exporter for Datasmith

The iTwin Exporter for Datasmith provides a viewer interface and
tools to load and export iTwin data as a `.udatasmith` file and
the corresponding Datasmith `_Assets` directory. Use Unreal Engine's Datasmith importer plugin
and our iTwin Datasmith plugin to import the exported datasmith content.
The Datasmith scene can be created with all of your metadata embedded for accessing
at runtime in Unreal Engine and at import time when using Visual Dataprep to process the scene during import.

## Table of Contents

1. [iTwin Unreal Datasmith Plugin](#itwinunrealdatasmithplugin)
    1. [Plugin compatibility](#plugincompatibility)
1. [Animations and schedule scripts](#animationsandschedulescripts)
    1. [Combined-mesh export animation support](#combinedmeshexportanimationsupport)
    1. [Non-combined-mesh export animation support](#noncombinedmeshexportanimationsupport)
1. [Performance considerations](#performanceconsiderations)
    1. [Combined-mesh export is the default](#combinedmeshexportisthedefault)
    1. [Non-combined-mesh export does not preserve the element hierarchy](#noncombinedmeshexportdoesnotpreservetheelementhierarchy)
    1. [Filtering exported elements](#filteringexportedelements)
    1. [Filtering with Visual Dataprep](#filteringwithvisualdataprep)
1. [Materials](#materials)
    1. [Custom materials with visibility-animated combined-mesh exports](#custommaterialswithvisibilityanimatedcombinedmeshexports)

## iTwin Unreal Datasmith Plugin

The iTwin Exporter for Datasmith helps you install
the _iTwin Unreal Datasmith Plugin_ providing C++ and Blueprint
APIs for controlling the animations of your iTwin. This plugin
also provides the default materials for your scene. See the
[Blueprint API reference](/unreal/integration/blueprint-api-reference).

### Plugin compatibility

The plugin is compatible with Unreal Engine versions 4.26.1 and later; earlier versions
may compile but contain a bug in the Datasmith importer that could impact some animations.

## Animations and schedule scripts

### Combined-mesh export animation support

In combined-mesh exports we currently support

- cutting plane (growing) animations
- color animations (such as SYNCHRO appearance profiles)
- visibility animations
- transformation animations such as rotation, translation, and scaling
  - transformation-animated (moving) objects do _not_ support color or cutting plane animations

All non-transformation animations for combined-mesh scenes are performed by special dynamic materials applied to your meshes by the
[ScheduledActor](/unreal/integration/blueprint-api-reference/#AScheduledActor) class from the iTwin Unreal Datasmith Plugin, which exposes a [Blueprint and C++ API](/unreal/integration/blueprint-api-reference) for managing
the animation state. All transformation-animated objects are exported as separated objects and animated using an Unreal
[Level Sequence](https://docs.unrealengine.com/4.27/en-US/AnimatingObjects/Sequencer/Overview/) which you
must add to the scene and manually manage due to limitations in the Datasmith API.

### Non-combined-mesh export animation support

We do not currently support cutting plane (growing) animations or color animations in
non-combined mesh exports due to limitations in the Datasmith API. Visibility and transform animations are supported.

An Unreal [Level Sequence](https://docs.unrealengine.com/4.27/en-US/AnimatingObjects/Sequencer/Overview/)
provides animations for non-combined mesh scenes. You must add a level sequence actor to the scene yourself
and control it using Unreal's sequencer.

You may notice useless visibility tracks on some static meshes, this is an issue in Datasmith, and we are working closely
with Epic to resolve it.

## Performance considerations

Consider the following when trying to improve the performance of your scene.
But always be aware that hardware is often a significant bottleneck when performing intense graphical work, such as working with scenes in Unreal Engine.

### Combined-mesh export is the default

Many scenes are too large to handle directly in Unreal without manually processing them. As such, we
recommend using the "combined meshes" feature during export. Combined-mesh exports combines all of the geometry in
your scene into one static mesh. You can then apply high-fidelity materials to your material slots; see the [Materials](#Materials) section
for limitations.

If you have an extremely high amount of instanced geometry or pieces of your geometry are too distant to be visible together, you may benefit from performing a separate or non-combined mesh export. Non-combined mesh export enables frustum culling of separate objects in the scene
which generally increases performance in those cases, and makes it easier to edit your objects in Unreal.

### Non-combined-mesh export does not preserve the element hierarchy

iModels meticulously split geometry into a sprawling hierarchy of elements. While this is great for your data and its organization,
translating them into Unreal actors can be much less performant than collapsing the hierarchy. As such, the hierarchy of elements in your iModel
is not preserved since it would require a lot of empty actors; it is instead flattened into a list of geometry-containing elements.
This ensures speedier imports and the best runtime performance possible, even when using a non-combined-mesh export.

To use the hierarchy information when writing your own Visual Dataprep recipes,
every mesh element of the actor scene has a metadata property `ElementPathByLabel`,
a forward-slash delimited string of User Labels (or Ids) of parent elements and models to reach your element in the scene.
For instance, `/0x1/0x20000000003/Site.dwfx/Walls (13)/Basic Wall (13)/Site Perimeter Fence (13)/Basic Wall [613789]`.

### Filtering exported elements

Hide elements, models, and categories in the viewport using the element tree on the right or, once an element is selected,
with the visibility tools in the top-left horizontal toolbar. Once you've hidden the objects you want to filter, use the "Export Current View"
tool in the top-left horizontal toolbar to export and filter those elements.

Use the **Saved-Views Widget** to save your viewport state if you want to re-export the scene again with these parts hidden.
Use advanced export to write [ECSQL](https://www.itwinjs.org/learning/ecsql/) queries to customize which elements are
filtered using custom logic such as geometric queries.

### Filtering with Visual Dataprep

Another technique for getting more performance out of your iModel geometry in Unreal is using Datasmith's Visual Dataprep to process your scene.
Use Dataprep recipes to filter out obscured and unnecessary actors and to optimize geometry with Datasmith's support for the [proxy geometry tool](https://docs.unrealengine.com/4.27/en-US/TestingAndOptimization/ProxyGeoTool/).

Reducing your actor count, getting rid of any unnecessary geometry, and optimizing unnecessarily dense geometry will all help lower the runtime costs of your scene.

## Materials

In the combined-mesh export, differently colored or textured parts of your iModel will be split into different material slots; geometry with
the same underlying color but different textures in the
All meshes, combined or not, store the original color of underlying graphics in the corresponding mesh vertices for use in materials.

If dividing material slots further would improve your workflow, either by category and model or by using ECSQL,
please vote for that feature on our [ideas portal](https://itwinplatform.ideas.aha.io/?category=7010781758179112615).

### Custom materials with visibility-animated combined-mesh exports

Materials need to opt-in to the visibility animation if controlled by the [ScheduledActor](/unreal/integration/blueprint-api-reference#AScheduledActor). To do so:

1. In the lower right corner of the **Content Browser**, press **View Options**, and mark the **Show Plugin Content** checkbox.

   <img alt='in the bottom right of the Content Browser open View Options and make sure "Show Plugin Content" is checked'
        src="/unreal-docs-site/images/unreal-export-show-plugin-content.png" style="max-width:100%;max-height:350px">

1. Open the the offending material in the material editor, set its blend mode to "Masked" (or if it's transparent, keep it).

   <img alt="material details Blend Mode"
        src="/unreal-docs-site/images/unreal-export-set-material-blend-mode.png"
        style="max-width:100%;max-height:350px">

1. Add a material function node, set it to use the iTwin Datasmith Importer Plugin's `MF_SynchroVisibilityAnimate` material function,
   and connect it to your material's opacity. You may want to blend (e.g. with a multiply node) the visibility animation's opacity with any
   other opacity your material is already using.
