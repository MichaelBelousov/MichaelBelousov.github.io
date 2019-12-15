import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import './index.scss';
import * as pages from './pages';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const routed = (
  <div className={styles.pageWrapper}>
    <Router>
      <header>
        <div className={styles.left}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/work">Work</Link>
          <Link className={styles.navLink} to="/3d">3D</Link>
          <Link className={styles.navLink} to="/blog">Blog</Link>
        </div>
        <div className={styles.right}>
          <h1>Mike Belousov</h1>
        </div>
      </header>
      <hr/>
      <Switch>
        <Route exact path="/">
          <pages.Home />
        </Route>
        <Route exact path="/work">
          <pages.Work />
        </Route>
        <Route exact path="/3d">
          <pages.ThreeD />
        </Route>
        <Route exact path="/blog">
          <pages.Blog />
        </Route>
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(routed, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
