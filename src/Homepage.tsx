import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styles from './Homepage.module.scss';
import blog from './test.md';

const Homepage = () => {
  return (
    <div className="Homepage">
      <header className={styles.homepageHeader}>
        <Logo className={styles.homepageLogo}>logo</Logo>
      </header>
      <div dangerouslySetInnerHTML={{__html: blog}} />
    </div>
  );
};

export default Homepage;

