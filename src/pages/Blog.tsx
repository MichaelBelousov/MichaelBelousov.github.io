import React, { useState, useEffect, useRef } from 'react';
import styles from './Blog.module.scss';
// TODO: dynamic import for speed
import superThinRaiiWrappersPost from '../blog/Super_Thin_RAII_Wrappers_for_C_Types.md';
import billWurtzPost from '../blog/billwurtz.md';

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
  return (
    <div ref={container} className={styles.container}>
      <Post body={billWurtzPost} />
      <Post body={superThinRaiiWrappersPost} />
    </div>
  );
};

export default Blog;

