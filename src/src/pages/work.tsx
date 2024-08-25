import React from 'react'
import Layout from '../components/layout'
import { ResumeContent } from '../components/ResumeContent'
import * as styles from './work.module.scss'
import * as sharedStyles from '../shared.module.scss'

const Work = () => {
  // TODO: useSyncExternalStore
  const customizeSkills = React.useMemo(() => window.location.hash.includes("customize_skills"), []);
  // TODO: keep in sync with resume content
  const [customSkills, setCustomSkills] = React.useState<string>(
    "");

  return (
    <Layout pageTitle="Work">
      {/* controls hidden while printing */}
      <div>
        <div className={sharedStyles.center}>
          <button>print me</button>
          {customizeSkills && (
            <label>
              Custom Skills:
              <textarea value={customSkills} onChange={e => setCustomSkills(e.currentTarget.value)} />
            </label>
          )}
        </div>
      </div>
      <ResumeContent customSkills={customSkills} />
    </Layout>
  )
}

export default Work
