import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header>
    <div className={styles.separate}>
      <div className={styles.left}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/work">Work</Link>
        <Link className={styles.navLink} to="/3d">3D</Link>
        <Link className={styles.navLink} to="/blog">Blog</Link>
      </div>
      <div className={styles.right}>
        <h1>Mike Belousov</h1>
      </div>
    </div>
    <hr/>
  </header>
);


export default Header;
