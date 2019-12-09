import React, { useState, useLayoutEffect, useRef } from 'react';
import Link from 'react-router-dom';
import styles from './Blog.module.scss';
// TODO: import just used languages, and send a PR to @types/highlight.js for that?
import hljs from 'highlight.js';

// TODO: dynamic import blogs for speed
import superThinRaiiWrappersPost from '../blog/Super_Thin_RAII_Wrappers_for_C_Types.md';
import billWurtzPost from '../blog/billwurtz.md';
import blender28 from '../blog/blender_2_8.md';
import latexScripting from '../blog/latex_and_python.md';
import convexHullViz from '../blog/convex_hull.md';

const PostWrapper = ({children}: {children?: React.ReactNode}) => {
  return <div className={styles.post}>{children}<hr/></div>;
};

const BlogLoader = () => {
  return (
    <PostWrapper>
      <div className={styles.loader}>
        <div className={styles.inner} />
      </div>
    </PostWrapper>
  );
};

interface PostProps {
  name: string;
  body: string;
}

const Post = (props: PostProps) => {
  return (
    <PostWrapper>
      <div dangerouslySetInnerHTML={{__html: props.body}} />
    </PostWrapper>
  );
};

const Blog = () => {
  const container = useRef<HTMLDivElement>(null);
  const [loadingNext, setLoadingNext] = useState(true);
  useLayoutEffect(() => void hljs.initHighlighting());
  return (
    <div ref={container} className={styles.container}>
      <Post name="blender28-is-awesome" body={blender28} />
      <Post name="LaTeX-scripting" body={latexScripting} />
      <Post name="convex-polygon-hull-viz" body={convexHullViz} />
      <Post name="bill-wurtz-shoutout" body={billWurtzPost} />
      <Post name="" body={superThinRaiiWrappersPost} />
    </div>
  );
};

export default Blog;

