import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import './index.scss';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ThreeDPage from './pages/ThreeDPage';
import DesignPage from './pages/DesignPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const routed = (
  <div className={styles.pageWrapper}>
    <Router>
      <header>
        <Link to="/"> Home </Link>
        <Link to="/work"> Work </Link>
        <Link to="/3d"> 3D </Link>
        <Link to="/design"> Design </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/work">
          <WorkPage />
        </Route>
        <Route exact path="/design">
          <DesignPage />
        </Route>
        <Route exact path="/3d">
          <ThreeDPage />
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
