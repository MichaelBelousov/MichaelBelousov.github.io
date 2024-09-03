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
      <ResumeContent customSkills={customSkills === "" ? undefined : customSkills} />
    </Layout>
  )
}

export default Work
