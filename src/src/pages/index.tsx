import React from 'react'
import Layout from '../components/layout'

const Homepage = () => {
  return (
    <Layout pageTitle="Home">
      <p> Hi, I'm Michael Belousov. I'm a programmer and digital artist. </p>
      <p>
        Here is a non-exhaustive list of software that I've used in an advanced
        capacity.
      </p>
      <ul>
        {[
          'C++, C',
          'Python',
          'Bash',
          'TypeScript, JavaScript, Node.js',
          'git',
          'Blender',
          'GNU/Linux',
          'Elm',
          'React.js',
          'Vue.js',
          'HTML5, CSS, Sass, SVG',
          'webpack, yarn, npm, lerna, pnpm, eslint, babel ...etc',
          'PostgreSQL, MongoDB',
          'Java',
          'LaTeX',
          'Gitlab',
          'Azure, ADO, Azure storage, Octopus',
          'lex/flex/reflex, yacc/Bison',
          'LLVM',
          '.NET, C#, dotnet-core',
        ].map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <p>Things I'm looking to use on a next project include:</p>
      <ul>
        {['Go', 'Rust', 'Haskell', 'Clojure'].map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <p>Some projects I am working on:</p>
      <ul>
        {[['Sizr', 'regex but for programming languages']].map(
          ([title, desc]) => (
            <li key={title}>
              <strong>{title}</strong> {desc}
            </li>
          )
        )}
      </ul>

      <p>
        I'm interested in lots of things and if you think you have one of them,
        feel free to{' '}
        <a href="mailto:mikemikeb@protonmail.com">contact me via email</a>. Also
        checkout <a href="https://github.com/MichaelBelousov">my GitHub</a> to
        see some projects I am working on or have worked on.
      </p>
    </Layout>
  )
}

export default Homepage
