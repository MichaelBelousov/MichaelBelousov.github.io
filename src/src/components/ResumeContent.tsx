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
              <Underline>Languages:</Underline> TypeScript, Python, C++/C/Zig, C#/.NET, Java, Rust
              <br/>
              <Underline>Backend:</Underline> PostgreSQL, MongoDB, SQLite, Linux, Node.js, Azure Service Fabric+Storage, nginx
              <br/>
              <Underline>Frontend:</Underline> React, Vue, Vite, Webpack, SVG, CSS/Sass, Redux, Electron, Web Security
              <br/>
              <Underline>Tools:</Underline> Git, GNU/Linux, GitHub Actions, Azure Pipelines, gdb, libAFL, libfuzzer, valgrind, Docker
            </>)}
          </div>
      </section>

      <section>
        <h2> Professional Experience </h2>

        <div className={"resume-dont-indent"}>

          <TwoCols>
            <div>
              <h4 style={{margin: "0"}}>
                <strong><SmallCaps>Bentley Systems</SmallCaps></strong>
              </h4>
              <div><em>Software Engineer II</em></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>May 2018&mdash;May 2024</div>
              <div>Exton, PA</div>
            </div>
          </TwoCols>

          <ul>
            <li>Led architecture and design for our next-generation Electron-based desktop app framework, mentoring all team members and helped manage day-to-day development</li>
            <li>Led development and mentored contributors of transformation API for the iTwin platform, a hybrid TypeScript/Node.js/C++ service</li>
            <li>Improved performance of the iTwin Platform public backend system, a cluster of Node.js/C++ services which persist data in a custom object-storage-based virtual file system for SQLite </li>
            <li>
              Produced webinar of platform integration with platform's highest impressions (&gt;5K) on LinkedIn.
              Wrote marketing webpages, <a href="/unreal-docs-site/tutorials/itwin-unreal-controlling-your-imodel.html">tutorials</a>,
              and <a href="https://medium.com/itwinjs/introducing-bentley-imodel-react-hooks-8945a72711d2">blog posts</a>
            </li>
            <li> Contributed to several customer facing full-stack applications with Node.js, C++, React, .NET, MongoDb, and Cloud SQLite </li>
            <li> Maintained dozens of CI/CD pipelines across Github Actions and Azure Pipelines </li>
            <li> Introduced fuzzing (catching dozens of buffer overflows), sanitizers, clang static analysis, and other tooling to native buildology </li>
          </ul>
        </div>

        <div className={"resume-dont-indent"}>
          <TwoCols>
            <div>
              <h4 style={{margin: "0"}}>
                <strong><SmallCaps>ITS</SmallCaps></strong>
              </h4>
              <div><em>Security Team Student Developer</em></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>December 2016&mdash;May 2019</div>
              <div>Storrs, CT</div>
            </div>
          </TwoCols>

          <ul>
            <li>
              Wrote <a href="https://github.com/MichaelBelousov/L2-Vis-Tools">an SVG network diagramming toolset</a> in <strong>Python</strong> that uses SNMP,
              CDP scanning, and a CISCO router CLI parser
            </li>
            <li> Migrated a <strong>PHP, Python2-XMLRPC, and jQuery</strong> web stack to <strong>Python3 and Vue.js</strong></li>
            <li> Administered multiple RHEL <strong>Linux</strong> and <strong>PostgreSQL</strong> server clusters </li>
          </ul>
        </div>

      </section>

      <section className="resume-noprint">
        <h2> Technical Writing <small>(omitted in print)</small> </h2>
        <ul>
          <li><a href="https://medium.com/itwinjs/introducing-bentley-imodel-react-hooks-8945a72711d2">introducing @bentley/imodel-react-hooks</a></li>
          <li><a href="/unreal-docs-site/tutorials/itwin-unreal-controlling-your-imodel.html">iTwin Platform Unreal integration tutorial (archive)</a></li>
          <li><a href="https://medium.com/itwinjs/evolve-your-itwin-with-unreal-45206afe19f4">Evolve your iTwin with Unreal</a></li>
          <li><a href="https://www.youtube.com/watch?v=IV0eBECws1k&t=130s">Bringing your iTwin into Unreal</a> (webinar video)</li>
          <li><a href="/blog/zig_error_payloads/">How I learned to love Zig's diagnostic pattern</a></li>
        </ul>
      </section>

      <section className="resume-noprint">
        <h2> Notable open source contributions <small>(omitted in print)</small> </h2>
        <ul>
          <li> <code><a href="https://github.com/lint-staged/lint-staged/pull/816">lint-staged</a></code> msys2/cygwin platform support </li>
          <li> <code><a href="https://github.com/typescript-eslint/typescript-eslint/pull/3601">typescript-eslint</a></code> bug in return-await lint rule </li>
          <li> <code><a href="https://github.com/godotengine/godot/pull/39739">Godot game engine</a></code> bug in initial C# object marshalling </li>
          <li> <code><a href="https://github.com/onivim/oni2/pull/2630">onivim2</a></code> command palette autocomplete bug in vim-like editor </li>
        </ul>
      </section>

      <section>
        <h2> Education </h2>
        <SmallCaps>University of Connecticut</SmallCaps>, Storrs, CT <br/>
        <em>Bachelor of Science</em>, Computer Science and Engineering
      </section>

    </div>
  );
};
