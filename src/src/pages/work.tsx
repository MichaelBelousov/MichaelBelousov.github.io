import React from 'react'
import Layout from '../components/layout'
import { ResumeContent } from '../components/ResumeContent'
import * as styles from './work.module.scss'
import * as sharedStyles from '../shared.module.scss'


const Work = () => {
  // TODO: useSyncExternalStore
  const customizeSkills = React.useMemo(() => globalThis.window?.location.hash.includes("customize_skills"), []);
  // TODO: keep in sync with resume content
  const [customSkills, setCustomSkills] = React.useState("");

  return (
    <Layout pageTitle="Work">
      {/* controls hidden while printing */}
      <div className={styles.workPageControl}>
        <div className={sharedStyles.center}>
          {/* NOTE: unfortunately there is no standard way to disable corner info for
             resumes when printing in browsers, so I just upload a PDF on change for
             PDF users */}
          <a href="/MichaelBelousov_resume.pdf" download="MichaelBelousov_resume.pdf">Download printable PDF</a>
          {customizeSkills && (
            <label>
              Custom Skills:
              <textarea value={customSkills} onChange={e => setCustomSkills(e.currentTarget.value)} />
            </label>
          )}
        </div>
      </div>

      {
      <div style={{fontSize: "12pt"}}>
        <p>
          Michael Belousov
          <br/>
          September 9, 2024
        </p>

        <br/>

        <p>Hello Hudson River Trading!</p>

        <p>
          Some friends of mine were telling me about Hudson River Trading company recently, and that I'd be
          a great fit with my high performance C++ experience. But, as someone who wears many hats,
          including professional Python and Linux for over a decade, I am applying to multiple positions
          to see where I can fit best at HRT!
        </p>

        <p>
          I'm a long time high-performance programming enthusiast, and I've always sought to strike a balance
          between code my colleagues are comfortable working with, and efficient usage of modern performance
          techniques, be they algorithms or language, runtime and hardware features like vectorization,
          and manual unrolling for memory dependency reduction.
        </p>

        <p>
          I think my previous colleagues at Bentley Systems would attest to me being one of the highest output, most knowledgeable
          and most helpful contributors, as I was the local expert in domains like Linux, C++, and even TypeScript, HTML5 security,
          and React. But, after talking with management, I realized it was time to move on if I wanted to advance my
          career and grow at a pace suited to my ability. So, I resigned and traveled with family for the summer.
        </p>

        <p>
          Now that I'm back, I think Hudson River Trading is that place, and I would love to bring my skills and grow them with you!
        </p>

        Sincerely,<br/>Michael Belousov
      </div>
      }
      {/*
      <ResumeContent customSkills={customSkills === "" ? undefined : customSkills} />
      */}
    </Layout>
  )
}

export default Work
