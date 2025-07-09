import React from 'react'
import Layout from '../components/layout'

const Homepage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, I'm Mike Belousov. I'm a programmer and occasional digital artist.
      </p>
      <p>
        I have a broad (and often deep) knowledge of computer systems and especially enjoy
        low-level programming, language design, and recently structured fuzz testing.
      </p>

      <br />

      <h2>Projects of varying sizes</h2>
      <ul>
        <li>
          <a href="https://graphl.tech/graphl">Graphl</a>: visual scripting language and IDE that compiles to WebAssembly and
           is being designed to be isomorphic to a variant of Lisp, with great support for visual DSLs like shaders
        </li>
        <li>
          <a href="https://alternis.io">alternis.io</a>: cross platform dialogue writing middleware in zig and editor
        </li>
        <li>
          <a href="https://www.npmjs.com/package/lazy-from"><code>lazy-from</code></a>: zip and other lazy iterators in JavaScript
        </li>
        <li><a href="https://mikemikeb.com/convex-hull-visualization">Melkman algorithm visualization</a> for finding convex hull of a polygon</li>
        <li><a href="https://github.com/MichaelBelousov/pylatexc">PyLaT<sub>E</sub>Xc</a>: A way to run python code in LaT<sub>E</sub>X documents</li>
        <li>a lot of stuff on <a href="https://github.com/MichaelBelousov">my Github</a></li>
      </ul>

      {/*
      <h2>I've contributed to</h2>
      <ul>
        <li>typescript-eslint</li>
        <li>onivim 2</li>
        <li>tree-sitter's node.js bindings</li>
        <li>Godot game engine</li>
        <li>lint-staged</li>
        <li>netaddr</li>
      </ul>
      */}

      <h2>Incomplete side projects (if you want me/yourself to continue one, reach out)</h2>
      <ul>
        <li><a href="https://github.com/MichaelBelousov/sizr-format/tree/master/tree-stitcher">AST transforms in Lisp by embedding tree-sitter's Lisp-ish query DSL</a>
          <aside>
            <em><a href="https://github.com/getgrit/gritql">GritQL</a> is really a better way of doing this</em>
          </aside>
        </li>
        <li><a href="https://github.com/MichaelBelousov/jsdbg">scriptable CLI debugger for node.js</a></li>
        <li><a href="https://github.com/MichaelBelousov/forkage">a package manager with first class forks</a></li>
      </ul>

      <p>
        if you have something cool or want to talk,
        feel free to reach out at <em>me</em> at <em>mikemikeb.com</em>{' '}
        Also checkout <a href="https://github.com/MichaelBelousov">my Github</a>{' '}
        for a lot of experiments, tinkerings, and occasional projects.
      </p>

      <h2>Frequently Asked Questions</h2>
      <ol>
        <li id="question-1">
          <strong>
            What IDE do you use?
          </strong>

          <div>
            <p>
              These days, tmux + bash + <a href="https://www.lunarvim.org/">lunarvim</a>. Aka the terminal.
            </p>
            
            <p>
              When forced to test on windows I use <a href="https://www.msys2.org/">msys2</a> to get something
              similar but these days I have success developing some windows-only projects using wine and Zig's
              bundled Clang.
            </p>
          </div>
        </li>

        <li>
          <strong>
            Emacs or Vim?
          </strong>

          <div>
            <p>See <a href="#question-1">question 1</a>. But maybe one day I'll try my hand at evil with <a href="https://www.spacemacs.org/">spacemacs</a>.</p>
          </div>
        </li>
      </ol>

    </Layout>
  )
}

export default Homepage
