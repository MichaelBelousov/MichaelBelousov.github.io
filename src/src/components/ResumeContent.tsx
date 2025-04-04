import React from "react"
import "./ResumeContent.css"

const SmallCaps = (props: React.HTMLProps<HTMLSpanElement>) => (
  <span {...props} style={{fontVariant:"small-caps"}}>{props.children}</span>
);

const Underline = (props: React.HTMLProps<HTMLSpanElement>) => (
  <span {...props} style={{textDecoration: "underline"}}>{props.children}</span>
);

const TwoCols = (props: React.HTMLProps<HTMLDivElement>) => (
  <div {...props} style={{ display: "flex", justifyContent: "space-between" }}>
    {props.children}
  </div>
);

export const ResumeContent = (props: {
  customSkills?: string
}) => {
  return (
    <div className="resume-content">
      <TwoCols>
        <div>
          <h1> Michael Belousov </h1>
          <strong>Hoboken, NJ</strong><br/>
          <strong><a href="mailto:me@mikemikeb.com">me@mikemikeb.com</a></strong> <br/>
          <strong><a href="https://mikemikeb.com">https://mikemikeb.com</a></strong> <br/>
        </div>
        <div style={{ textAlign: "right" }}>
          <h1>&nbsp;</h1>
          <strong><a href="tel:+12035029425">+1 (203) 502-9425</a></strong> <br/>
          <strong><a href="https://www.linkedin.com/in/michael-belousov-745ab8238/">LinkedIn</a></strong> <br/>
          <strong><a href="https://github.com/MichaelBelousov">GitHub</a></strong>
        </div>
      </TwoCols>
      <hr />

      <section className="resume-section-techskills">
        <h2> Technical Skills </h2>
          <div>
            {(props.customSkills || <>
              <Underline>Languages:</Underline> TypeScript/JavaScript, C++, Python, C, Zig, SQL, C#
              <br/>
              <Underline>Backend:</Underline> PostgreSQL, MongoDB, Linux, Node.js, nginx, Redis
              <br/>
              <Underline>Cloud:</Underline> Terraform, Docker, Azure Containers, Azure Monitor, Azure Storage, Azure Functions
              <br/>
              <Underline>Frontend:</Underline> React, Vite, Webpack, GraphQL, CSS, Express, Cypress, Playwright, Jest
              <br/>
              <Underline>Tools:</Underline> Git, GNU/Linux, GitHub Actions, Azure Pipelines, GDB, Valgrind, neovim
            </>)}
          </div>
      </section>

      <section>
        <h2> Experience </h2>

        <div className={"resume-dont-indent"}>
          <TwoCols>
            <div>
              <h4 style={{margin: "0"}}>
                <strong>Graphl + Twin Sync Studio</strong>
              </h4>
              <div><em>personal project</em></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>May 2024&mdash;Current</div>
              <div></div>
            </div>
          </TwoCols>

          <ul>
            <li>
              Shipped hybrid <strong>Electron</strong>+<strong>React</strong>+<strong>zig</strong> desktop application for
              fault-tolerant large geometric scene transformations
            </li>
            <li>
              Shipped in-house anti-piracy licensing service using <strong>Bun TypeScript</strong> and
              deployed with <strong>Terraform</strong> to <strong>Azure Cloud</strong>
            </li>
            <li>
              Implemented (in <strong>Zig</strong>) a visual scripting IDE and workflow engine compiler to <strong>WebAssembly</strong>
            </li>
            <li>
              Published SDK with host-defined functions and <strong>JavaScript</strong>/<strong>WebAssembly</strong> interop
            </li>
            <li>
              Shipped local-first web IDE and marketing page built with <strong>Gatsby</strong>, <strong>React</strong>, and <strong>Github Actions</strong>
            </li>
            <li>
              Built architectural visualization pipeline for iTwin/Synchro 4D data in <strong>Unreal Engine</strong> <strong>C++</strong>
            </li>
          </ul>
        </div>

        <div className={"resume-dont-indent"}>
          <TwoCols>
            <div>
              <h4 style={{margin: "0"}}>
                <strong><SmallCaps>Bentley Systems</SmallCaps></strong>
              </h4>
              <div><em>Software Engineer II</em></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>May 2019&mdash;May 2024</div>
              <div>Exton, PA</div>
            </div>
          </TwoCols>

          <ul>
            <li>
              Led architecture and design for our next-gen <strong>Electron</strong>-based
              desktop app framework, mentored midsize team of <strong>10+</strong> junior to senior
              level engineers and managed development
            </li>
            <li>Led team of 5 engineers building APIs for transforming data in the iTwin Platform, in <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>C++</strong></li>
            <li>Implemented <strong>5-10&times; speed</strong> improvement of Transformation API through profiling and eliminating IO bottlenecks, after taking over service ownership</li>
            <li>
              Built several customer-facing full-stack applications leveraging <strong>micro-service</strong> architectures
              , <strong>Node.js</strong>, <strong>C++</strong>, <strong>React</strong>
              , <strong>ASP.NET</strong>, <strong>MongoDB</strong>, and <strong>Redis</strong>
            </li>
            <li> Deployed a <strong>micro-frontend</strong> architecture with version rollback to handle multiple teams delivering live component updates for &gt;15 applications </li>
            <li> Designed <strong>30+</strong> CI/CD pipelines with <strong>Github Actions</strong>, <strong>Azure Pipelines</strong>, and <strong>Python</strong> </li>
            <li> Prevented costly company breaches by discovering and patching <strong>15+</strong> severe vulnerabilities in critical systems by introducing fuzzing, sanitizers, and <strong>Clang</strong> static analysis</li>
          </ul>
        </div>

        <div className="resume-pagebreak"/>

      </section>

      <section>
        <h2> Education </h2>
        <SmallCaps>University of Connecticut</SmallCaps>, Storrs, CT
        <br/>
        Graduated with <em>Bachelor of Science</em> in <em>Computer Science and Engineering</em> in 2019
      </section>

      <section className="resume-noprint">
        <h2> Technical Writing <small>(omitted in print)</small> </h2>
        <ul>
          <li><a href="https://medium.com/itwinjs/introducing-bentley-imodel-react-hooks-8945a72711d2">introducing @bentley/imodel-react-hooks</a></li>
          <li><a href="https://mikemikeb.com/unreal-docs-site/tutorials/itwin-unreal-controlling-your-imodel.html">iTwin Platform Unreal integration tutorial (archive)</a></li>
          <li><a href="https://medium.com/itwinjs/evolve-your-itwin-with-unreal-45206afe19f4">Evolve your iTwin with Unreal</a></li>
          <li><a href="https://www.youtube.com/watch?v=IV0eBECws1k&t=130s">Bringing your iTwin into Unreal</a> (webinar video)</li>
          <li><a href="https://mikemikeb.com/blog/zig_error_payloads/">How I learned to love Zig's diagnostic pattern</a></li>
        </ul>
      </section>

      <section>
        <h2> Notable open source contributions </h2>
        <ul>
          <li> <code><a href="https://github.com/donIsaac/zlint">zlint</a></code> linter for the zig programming language </li>
          <li> <code><a href="https://github.com/lint-staged/lint-staged/pull/816">lint-staged</a></code> msys2/cygwin platform support </li>
          <li> <code><a href="https://github.com/typescript-eslint/typescript-eslint/pull/3601">typescript-eslint</a></code> bug in return-await lint rule </li>
          <li> <code><a href="https://github.com/godotengine/godot/pull/39739">Godot game engine</a></code> bug in initial C# object marshalling </li>
          <li> <code><a href="https://github.com/onivim/oni2/pull/2630">onivim2</a></code> command palette autocomplete bug in vim-like editor </li>
        </ul>
      </section>

    </div>
  );
};
