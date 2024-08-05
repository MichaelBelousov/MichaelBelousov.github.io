import React, { useLayoutEffect, useState } from 'react'
import * as styles from './work.module.scss'
import Layout from '../components/layout'

// TODO: replace with object? can't remember why I stopped using an object element

const calcHeight = (windowHeight: number) => {}

const Work = () => {
  const [height, setHeight] = useState(/*window.innerHeight*/ '7in')

  useLayoutEffect(() => {
    const resizePDF = () => {}
    document.addEventListener('resize', resizePDF)
    return () => document.removeEventListener('resize', resizePDF)
  }, [])

  return (
    <Layout pageTitle="Work">
      <div className={styles.container}>
        <h2>Michael Belousov's Resume:</h2>
        <p>
          If the embed isn't loading, you can reload the page or <a
            href="http://github.com/MichaelBelousov/resume/raw/master/resume.pdf"
          >
           download it directly
          </a>.
        </p>
        <iframe
          title="mike's resume pdf"
          className={styles.pdf}
          src="https://docs.google.com/gview?url=http://github.com/MichaelBelousov/resume/raw/master/resume.pdf&embedded=true"
          //frameborder="0"
          style={{ height }}
        >
          <p>
            You can't see it apparently. My resume as a PDF should be at my
            github page,
            <a href="https://github.com/MichaelBelousov/Resume/blob/master/resume.pdf">here</a>.
          </p>
        </iframe>
        <p>
          Here is a non-exhaustive list of tools that I am an
          advanced user of.
        </p>
        <ul>
          {[
            'C++',
            'C',
            'Python',
            'Bash',
            'TypeScript+JavaScript',
            'Node.js',
            'Electron',
            'git',
            'Rust',
            'Blender',
            'GNU/Linux',
            'React.js',
            'Vue.js',
            'Gatsby',
            'HTML5, CSS, Sass, SVG',
            'Webpack',
            'Eslint',
            'elm-lang',
            'PostgreSQL',
            'MySQL',
            'SQLite',
            'MongoDB',
            'Java',
            'LaTeX',
            'Gitlab',
            'Azure',
            'lex/flex/reflex, yacc/Bison',
            'LLVM',
            '.NET, C#',
            'Zig',
            'Godot',
            'Unreal Engine',
          ].map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <p>Tools I'd like to spend more time with:</p>
        <ul>
          {['Haskell', 'Clojure', 'Svelte', 'Tauri'].map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Work
