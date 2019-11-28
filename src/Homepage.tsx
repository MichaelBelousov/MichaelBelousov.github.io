import React from 'react';
import styles from './Homepage.module.scss';

const Homepage = () => {
  return (
    <div>
      <p> Hi, I'm Michael Belousov. I'm a programmer and digital artist. </p>
      <p>
        Some software components that I've used in an advanced capacity include:
        <ul>
          {[
            'C++, C', 
            'Python', 
            'Bash', 
            'TypeScript, JavaScript, Node.js', 
            'git', 
            'Blender', 
            'Linux/GNU', 
            'Elm', 
            'React.js', 
            'Vue.js', 
            'HTML5, css, sass', 
            'webpack, yarn, npm, lerna, ...etc',
            'PostgreSQL, mongodb', 
            'Java',
            'PHP',
            'Lisp',
            'LaTeX',
          ].map(s => <li>{s}</li>)}
        </ul>
      </p>
      <p>
      Things I'm looking to use on a next project include:
      <ul>
        {[
          'Haskell', 
          'Clojure', 
          'Go', 
          'Rust', 
        ].map(s => <li>{s}</li>)}
      </ul>
      </p>
    </div>
  );
};

export default Homepage;

