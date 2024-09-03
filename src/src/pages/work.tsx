import React from 'react'
import Layout from '../components/layout'
import { ResumeContent } from '../components/ResumeContent'
import * as styles from './work.module.scss'
import * as sharedStyles from '../shared.module.scss'


// people keep recommending I change my skills to a certain resume, and honestly,
// my list of skills is too long to put in the resume, so, yes, I do tune my
// list of presented skills on the resume, I have a lot more but I won't show them
// to save space
const defaultSkills = `\
TypeScript/JavaScript, Python, GNU/Linux, React, Node.js, Vue, Flask,
<br/>
CSS/Sass, Vite, Webpack, MongoDb, Postgres, MySQL, AWS Lambda,
<br/>
GraphQL, Apollo, Next.js, Web Assembly, HTML5 security,
<br/>
Git, Zig, C++/C, Docker, K8s,
GitHub Actions, Azure Pipelines, Azure Cloud,
matplotlib
`;

const Work = () => {
  // TODO: useSyncExternalStore
  const customizeSkills = React.useMemo(() => globalThis.window?.location.hash.includes("customize_skills"), []);
  // TODO: keep in sync with resume content
  const [customSkills, setCustomSkills] = React.useState(defaultSkills);

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
      <ResumeContent />
    </Layout>
  )
}

export default Work
