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
          a great fit with my high performance C++ experience. But, as someone who wears many hats, I am also
          a long time professional user of Linux and Python, so I am also applying to your Systems Software Engineer
          position, as well.
        </p>

        <p>
          I've managed Linux (RHEL/CentOS) server infrastructure at the UCONN's Information Technology Services
          security team, ran an Ubuntu-based GitLab installation for an international hobby development team,
          and been the Linux expert at Bentley Systems, frequently debugging generic issues in our deployments
          and CI/CD pipelines.
        </p>

        <p>
          I've also been using desktop Linux (Debian/Arch derivatives) for over a decade, which is a great motivator
          to run into new issues and then fix them.
        </p>

        <p>
          I think I would be a great fit for HRT's culture, and would love to bring my skills and grow them with you!
        </p>

        Sincerely,<br/>Michael Belousov
      </div>
      {/*
      <ResumeContent customSkills={customSkills === "" ? undefined : customSkills} />
      */}
    </Layout>
  )
}

export default Work
