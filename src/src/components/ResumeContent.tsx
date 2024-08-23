import React from "react"
import "./ResumeContent.css"

const SmallCaps = (props: React.HTMLProps<HTMLSpanElement>) => (
  <span style={{fontVariant:"small-caps"}}>{props.children}</span>
);

export const ResumeContent = (props: {}) => {
  return (
    <div className="resume-content">
      <h1> Michael Belousov </h1>
      <strong><a href="https://mikemikeb.com">https://mikemikeb.com</a></strong> <br/>
      <strong>+1 (203) 502-9425</strong> <br/>
      <strong><a href="mailto:me@mikemikeb.com">me@mikemikeb.com</a></strong> <br/>
      <strong><a href="FIXME">LinkedIn</a></strong>
      <hr />

      <section>
        <h2> Experience </h2>

        <div>
          <h4>
            <strong>
              <SmallCaps>Bentley Systems</SmallCaps>, <em>Software Engineer II</em>
            </strong>
            (May 2018&mdash;Resigned May 2024) <br/>
          </h4>

          <ul>
            <li>Led architecture and design for our next-generation desktop application framework, mentoring all team members and helped manage day-to-day development</li>
            <li>
              Led (solo) development and deployment of the iTwin platform Unreal Engine integration:
              an Electron application bridging Datasmith C++ SDK to iTwin Node.js APIs, wrote marketing webpages, tutorials, blogs, and update service
            </li>
            <li> Led development and mentored contributors of the Transformation core API for the iTwin platform, a TypeScript Node.js API with native C++ addon components </li>
            <li> Contributed to multiple customer facing full-stack applications with Node.js, React, ASP.NET C#, C++, MongoDb, and SQLite </li>
            <li> Produced a webinar promoting the product I led development of on our platform, and blogged about out platform publicly, see the <strong>Technical Writing</strong> section below </li>
            <li> Introduced fuzzing (catching dozens of buffer overflows), sanitizers, clang static analysis, and other tooling to native buildology </li>
          </ul>
        </div>

        <div>
          <h4>
            <strong>
              <SmallCaps>ITS</SmallCaps>, <em>Security Team Developer</em>
            </strong>
            (December 2016&mdash;May 2019) <br/>
          </h4>
          <ul>
            <li>
              Wrote <a href="https://github.com/MichaelBelousov/L2VisTools">an SVG network diagramming toolset</a> that used SNMP,
              CDP scanning, and a CISCO router CLI parser
            </li>
            <li> Migrated a PHP-Python2 XMLRPC+jQuery web stack into bilingual Python3+Vue.js</li>
          </ul>
        </div>

        <div>
          <h4>
            <strong>
              <SmallCaps>UCONN Speech and Hearing research</SmallCaps>, <em>Technical contractor</em>
            </strong>
            (March 2017&mdash;July 2018) <br/>
          </h4>
          <ul>
            <li>
              Built (solo) an interactive simulation in Unreal Engine 4
              for tracking navigation patterns, for neurological research
            </li>
            <li>
              Built (solo) a TkInter Python app for top-down visual playback of participant sessions and naigation data export to Excel
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2> Education </h2>
        <SmallCaps>University of Connecticut</SmallCaps>, Storrs, CT <br/>
        <em>Bachelor of Science</em>, Computer Science and Engineering. Completed May 2019 <br/>
      </section>

      <section>
        <h2> Technical Skills </h2>
          Zig, C++/C, TypeScript, Python, GNU/Linux,
          <br/>
          Git, React, Node.js, Rust, OpenGL/GLSL,
          <br/>
          GitHub Actions, Azure Pipelines, Azure Cloud,
          <br/>
          .NET, C#, HTML5/CSS, SQLite, Postgres, MongoDb,
          <br/>
          Web Assembly, PHP, Godot, Unreal Engine, Docker,
          <br/>
          Rust, Electron, Lisp+Scheme, Java,
          <br/>
          Valgrind, ASan, libfuzzer, libAFL, rr, gdb
          <br/>
          Word processing, PowerPoint, Excel, LaT<sub>E</sub>X
      </section>

      <section>
        <h2> Technical Writing </h2>
        <ul>
          <li><a href="https://medium.com/itwinjs/introducing-bentley-imodel-react-hooks-8945a72711d2">introducing @bentley/imodel-react-hooks</a></li>
          <li><a href="https://web.archive.org/web/20220926063257/https://developer.bentley.com/tutorials/itwin-unreal-controlling-your-imodel/">iTwin Platform Unreal integration tutorials</a>
            (why this integration was deprecated!)</li>

        <li><a href="https://medium.com/itwinjs/evolve-your-itwin-with-unreal-45206afe19f4">Evolve your iTwin with Unreal</a></li>
            <li><a href="https://www.youtube.com/watch?v=IV0eBECws1k&t=130s">Bringing your iTwin into Unreal</a> (webinar video)</li>
        </ul>
      </section>



      <section>
        <h2> Notable projects </h2>
        <ul>
          <li><a href="https://alternis.io">alternis.io</a> embeddable dialogue middleware (in <a href="ziglang.com">zig</a>) and visual flow-based dialogue editor app</li>
          {/*FIXME*/}
        </ul>
      </section>

      <section>
        <h2> Notable open source contributions </h2>
        <ul>
          <li> <code><a href="https://github.com/okonet/lint-staged">lint-staged</a></code> msys2/cygwin platform support </li>
          <li> <code><a href="https://github.com/typescript-eslint/typescript-eslint">typescript-eslint</a></code> bug in async-return FIXME lint rule </li>
          <li> <code><a href="https://github.com/godotengine/godot">Godot game engine</a></code> bug in initial C# object marshalling </li>
          <li> <code><a href="https://github.com/onivim/oni2/pull/2630">onivim2</a></code> vim-like text editor written in OCaml/Reason </li>
        </ul>
      </section>

    </div>
  );
};
