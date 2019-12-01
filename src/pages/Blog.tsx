import React, { useState, useEffect, useRef } from 'react';
import styles from './Blog.module.scss';

const PostWrapper = ({children}: {children?: React.ReactNode}) => {
  return <div className={styles.post}>{children}</div>;
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
      {loadingNext && <BlogLoader />}
    </div>
  );
};

export default Blog;
