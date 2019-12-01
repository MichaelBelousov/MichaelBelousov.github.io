import React from 'react';

const Homepage = () => {
  return (
    <div>
      <p> Hi, I'm Michael Belousov. I'm a programmer and digital artist. </p>
      <p>
        Some software components/stacks that I've used in an advanced capacity include:
        I've used other stuff that may not warrant mention, such as PHP.
      </p>
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
          'HTML5, css, sass, SVG', 
          'webpack, yarn, npm, lerna, ...etc',
          'PostgreSQL, mongodb', 
          'Java',
          'Lisp',
          'LaTeX',
          'Gitlab',
          'Azure, ADO, Azure storage, Octopus',
          'GNU make',
          'lex/flex/reflex, yacc/Bison',
          'LLVM',
          '.NET, C#',
        ].map(s => <li>{s}</li>)}
      </ul>

      <p>
      Things I'm looking to use on a next project include:
      </p>
      <ul>
        {[
          'Go', 
          'Rust', 
          'Haskell', 
          'Clojure', 
        ].map(s => <li>{s}</li>)}
      </ul>

      <p>
      Some projects I might be working on:
      </p>
      <ul>
        {[
          ['Sizr', 'refactoring refactored, using a uniquely human-oriented AST query DSL' +
          ' for declaring terse source transforms'
          ], 
          ['Fluster', 'a programming language, with fun features like recasing imports and a' +
            ' focus on reuse, not concerned with runtimes and using a C-style virtual machine model'
          ],
          ['Untitled', 'unquestionably correct code formatting with a DSL and spring physics'], 
          ['Engem', 'realtime graphics stuff'],
        ].map(([title, desc]) => <li><strong>{title}</strong> {desc}</li>)}
      </ul>

      <p>
      I'm interested in lots of things and if you think you have one of them, feel free
      to contact me via email.
      </p>
    </div>
  );
};

export default Homepage;

