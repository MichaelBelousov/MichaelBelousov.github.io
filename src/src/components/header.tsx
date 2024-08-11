import { Link } from 'gatsby';
import React from 'react';
import * as styles from './header.module.scss';
import * as sharedStyles from '../shared.module.scss';
import GithubLogo from "../images/github-mark-white.inline.svg";
import LinkedInLogo from "../images/linkedin-app-white-icon.inline.svg";
import XLogo from "../images/x-social-media-white-icon.inline.svg";

const Header = () => (
  <header>
    <div className={sharedStyles.center}>
      <nav className={styles.topnav}>
        Mike Belousov
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/work">Resume</Link>
        <Link className={styles.navLink} to="/3d">Art</Link>
        <Link className={styles.navLink} to="/blog">Blog</Link>
        <a href="https://github.com/MichaelBelousov" className={sharedStyles.center}>
          <GithubLogo className={styles.navLink} style={{ width: 20, height: 20, marginTop: 4 }} viewBox="0 0 100 100" />
        </a>
        <a href="https://www.linkedin.com/in/michael-belousov-745ab8238/" className={sharedStyles.center}>
          <LinkedInLogo className={styles.navLink} style={{ width: 20, height: 20, marginTop: 4 }} />
        </a>
        <a href="https://x.com/bigdecafenergy" className={sharedStyles.center}>
          <XLogo className={styles.navLink} style={{ width: 20, height: 20, marginTop: 4 }} />
        </a>
      </nav>
    </div>
    <hr/>
    <br/>
  </header>
);

export default Header;

