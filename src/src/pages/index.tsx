import React from 'react'
import Layout from '../components/layout'
import vladOnMyShouldersPath from '../images/vlad-on-my-shoulders.jpg'
import * as sharedStyles from "../shared.module.scss"

const Homepage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, I'm Michael (Mike) Belousov. I'm a programmer and occasional digital artist.
      </p>
      <p>
        I have a broad (and often deep) amateur-ish knowledge of computer systems and especially enjoy
        low-level programming, language design, and recently structured fuzz testing.
      </p>

      <h2>Frequently Asked Questions</h2>
      <ol>
        <li>
          <strong>
            What IDE do you use?
          </strong>

          <div>
            <p>
              tmux + bash + <a href="https://www.lunarvim.org/">lunarvim</a>.
            </p>
            
            <p>
              When forced to use windows I use <a href="https://www.msys2.org/">msys2</a> to get something similar but these days
              I have success developing some windows-only projects using wine and Zig's bundled Clang.
            </p>
          </div>
        </li>
      </ol>


      <p>projects I could use some help or inspiration on include</p>
      <ul>
        <li>AST transforms in Lisp by embedding tree-sitter's Lisp-ish query DSL <em> nevermind grit ql is better </em></li>
        <li>CLI debugger for node.js</li>
      </ul>

      <p>
        if you have something cool or want to talk,
        feel free to reach out at <em>me</em> at <em>mikemikeb.com</em>{' '}
        Also checkout <a href="https://github.com/MichaelBelousov">my GitHub</a>{' '}
        for a lot of experiments, tinkerings, and occasional projects.
      </p>
    </Layout>
  )
}

export default Homepage
