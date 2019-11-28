import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styles from './App.module.scss';
import blog from './test.md';

const App = () => {
  console.log(styles);
  return (
    <div className="App">
      <header className={styles.appHeader}>
        <Logo className={styles.appLogo}>logo</Logo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div dangerouslySetInnerHTML={{__html: blog}} />
    </div>
  );
};

export default App;

