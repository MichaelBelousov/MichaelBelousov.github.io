---
path: "/blog/holygrail-of-aec-data-part-1"
title: "The holygrail of AEC data formats - Part 1: What we want and what we have"
date: "2025-07-03"
---

In the past few years, there have been some newcomers to the AEC<sup><a href="#footnote-1">1</a></sup> format space,
trying to efficiently capture the broad and evolving use cases of AEC data.
I've been reflecting on the limitations of the existing and new formats for a while,
and I wanted to write it out before I go off to do other things for a while.

A little warning, this is a very complex topic, and I'm bad at avoiding getting technical.
But, I will break it up into parts, and I'll also try to make it skim/skip friendly.

## What AEC wants (use cases)

Firstly, I propose that only the following primary use cases exist in AEC:

- **querying**
    - across time
    - visualization
        - on the globe
        - also across time (4D animation)
    - comparing query results (diffing)
- **editing**
    - of geometry 
    - of generic data
    - of time data
    - support for derived data
    - support for advanced constraints

So really just reading and writing, like all data! But with a focus on correlating data with
spatial (3D) and temporal (4D) dimensions.

## Querying 

Querying is just asking questions about the data.

Importantly, we want our data to encompass the mass of information from existing sources,
and adopt to new ones

- CAD files
- historical sensor data (e.g. SCADA)
- modern construction data platforms (Construction Cloud, Speckle, iTwin)
- generic data (spreadsheets, databases, JSON, etc)

And we also want *fast* answers to our questions.

Questions always have a time context. The default one is "now".

> "How many automatic doors does this building have"

They can also have a historical context.

> "How many automatic doors did this building have in 2005"

They can also be technically composed of separate questions (queries) that are then compared.

> "How many hinged doors in the building have been replaced with automatic doors between 2005 and 2018"

## GIS and time

Most things in our world have physical/spatial and temporal dimensions. In other words, we should be able to
draw a "geographic chart" of our data (think showing a building in Google maps/earth). But that's just the
spatial dimensions. We probably also want to draw the temporal dimension by letting users scrub through or
playback events across a timeline, where they can see objects moving, or a building being built from its
construction sequence, animating and moving on the screen.

These are important because those dimensions are intuitive to humans.

## Visualizing as a subset of querying

So if not clear from the above paragraph, I think AEC visualization is just adding one (or 4) new dimension(s)
to all your charts. Instead of reading a sorted list of pipes that break frequently in a municipal water network, you view a heatmap
of incidents.

<div style="text-align:center">
  <a href="https://www.researchgate.net/figure/Figura-3-A-Heatmap-mostrando-onde-ha-maior-incidencia-de-empreendedores-que-se_fig2_336240413">
    <img style="width:50%" alt="heatmap over some region"
      src="https://www.researchgate.net/profile/Bruno-Fischer-3/publication/336240413/figure/fig2/AS:809957586907137@1570120345134/Figura-3-A-Heatmap-mostrando-onde-ha-maior-incidencia-de-empreendedores-que-se.jpg"
    />
  </a>
  <div>
    <caption style="text-align:center;font-style:italic">A heatmap, just not displayed on pipes</caption>
  </div>
</div>

All *queries* that involve physical/temporal dimensions should have their default "chart type" be just a physical,
probably animated, view. Consider the question:

> "Which pipes in pipe network 'A' have had the most maintenance events in the last 3 years?"

Any query concerning "pipes from pipe network 'A'", should probably be visualized by looking at those darn pipes,
and the extra dimension of "maintenance events" count would just be a gradient color/heatmap over those pipes.

You could also probably default to showing a temporal layer of a heatmapped timeline that can be played through to see events
happening and roughly how quickly they happen after each other.

Another sample query might be:

> "What obstacles will this crane need to avoid in this construction site?"

Which could show the projected movement of the crane (if you have a 4D plan) and which physical objects are close to the
movement paths of the crane.

## Comparison queries (diffs)

Comparisons are also important, as you may have to visualize two versions of the same thing:

> "What changes have been made to this model since August?"

Then two versions would have to be *diffed*<sup><a href="#footnote-2">2</a></sup>, something many coders already do often using
version control software such as git.

The important bit, is that I think with physical and temporal context, a "natural" of "default" visualization becomes pretty easy
to come up with. It's like overlaying an Excel chart over a 3D scene, possibly with an interactive timeline.

Even diffing the changes to object positions in different versions is doable, as you can draw translucent versions of the
same object to compare the change visually.

<div style="text-align:center">
  <a href="https://github.com/bdlucas1/diff3d">
    <img style="width:50%" alt="example component diff where an extruded portion is shown in green"
      src="https://raw.githubusercontent.com/bdlucas1/diff3d/refs/heads/master/examples/scheme1.png"
    />
  </a>
  <div>
    <caption style="text-align:center;font-style:italic">Image created using diff3d, click the image to check it out</caption>
  </div>
</div>

## What AEC has

Today we are in the middle of the dawn of tech-company inspired AEC startups and their platform approach,
but we also have culturally the entrenched giants of 50 year old applications still used today.

## Overview of some formats/platforms

- IFC
    - schema driven, a lot of IFC tooling is generated from a [gigantic schema definition](https://github.com/stepcode/stepcode/blob/develop/data/ifc4/IFC4.exp)
    - the most popular persistence format is plaintext line-based (STEP), but there is also an XML format
        - geometry can be relatively slow to read from text (including XML)
- [Fragments](https://docs.thatopen.com/Tutorials/Fragments/)
    - open source
    - designed for 3D performant viewing, no data
    - is a [flatbuffer schema](https://github.com/ThatOpen/engine_fragment/blob/main/packages/fragments/flatbuffers/index.fbs) with a [Three.js](https://threejs.org/) importer
- [iTwin.js iModels](https://www.itwinjs.org/)
    - mostly open source (breps can only be inspected or edited using the proprietary Parasolid geometry kernel)
    - has versioning support with visualization
    - supports structured data
    - supports versions, but comparing versions requires extra setup, and branching seems to still be alpha at best
- [Speckle](https://speckle.systems/)
    - some open source
    - has versioning support with visualization
    - supports structured data
- application-specific data formats (.rvt, .dwg, .dwfx, .dgn, .sp, and a bajillion others)
    - often proprietary, requires special handling for each one
- visualization interchange formats
    - obj, FBX, glTF, USD, dae, etc
    - may contain lots of metadata, built for visualizing, few people edit on this.
- 3d tiles (cesium)
    - visualization only
    - designed for 3d performant viewing, not

## Common trade-offs

Most of these are a trade-off between editability, queryability and visualization speed. Here are some common trade-offs:

#### Not great at visualization

A lot of formats do not store geometry in an optimized way to show it as fast as possible, especially for showing large scenes
using modern hardware. Some of the platforms, use a separate geometry cache to speed this up.

#### Only great at visualization

Some formats (3d tiles and fragments) are not designed for editing or storing structured data, just optimized 3d data,
maybe with some light metadata.

#### Not great at editing

Editing is hard. Each object may have to abide by constraints known only by a particular engineering discipline, or *domain*.

The domain for that data (e.g. electrical) may impose constraints that you must be aware of when editing things, so you need
to either always load every domain, or support dynamically loading domains or encode those constraints genericly somehow.
Sometimes you can't just move that object 2 feet to the left or it will violate something.

Also, constraints and computed properties mean you now need an entire specification in the format of how to embed and
execute arbitrary logic, so now you're storing arbitrary, bug-ridden code... yikes.

I will talk about it more in part 2, but it's worth noting that there are some databases out there like DuckDB
that have a dynamic [extension model](https://duckdb.org/docs/stable/extensions/overview.html) that may be the closest
I've seen to being able to store data and really impose arbitrary logic on it.

#### Weak support for time visualization (animation)

IFC contains some construction schedule concepts, but nothing really visualizable as far as I can tell. I have never seen
an animated IFC.

iTwin can contain some animation data, but it's not really well integrated into the rest of the design or
even its source data.

3d tiles are pretty terrible for animation. The big interchange formats often do support
some animation though, but not everything. Animation almost also requires a full arbitrary logic engine.

## Where we're going

So I've hinted at it a bit by bringing up databases and version control, but I think most industries haven't yet internalized
that not just on a macro level, but also a micro level, they're eventually going to go down a similar path to the tech industry.

That is, they will start using automated tests. Then version control (git). And then CI/CD platforms. (And then AI probably).
I mean maybe the path will look really blurry as they try to adopt everything all at once, but I think that even with AI,
they will put those processes in place as they move forward.

I think they'll go this way simply because that reflects the engineering mindset and the current technology available. I think
tech companies are the leaders in this trend basically.

## A blueprint for the perfect AEC data platform

Unlike code, AEC is highly aligned with the "physical" and "temporal" dimensions, so I think the industry is well posed to have
someone come and leverage that into a normalized data platform that truly visually answers all our questions and provides
the insights the industry is looking for.

Especially if you make sure to build it so that AI can turn those english queries I wrote into e.g. SQL queries or Python code,
or even have AI MCP its way into legacy applications as the glue...

Next time, and it may be a while, I will try to distill more of what we saw here into what I think a great AEC platform would look
like.

And yeah, it won't be perfect, that's a lie. But I definitely think today has a lot of opportunity.

-------------------------------

##### Footnotes

1. <div id="footnote-1"></div>Architecture, Engineering, Construction
2. <div id="footnote-2"></div>To find the difference between two things
