import React, { useState, useLayoutEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styles from './Blog.module.scss';
import hljs from 'highlight.js';

export default function Template({
  data
}: any) {
  const { frontmatter: { title, date }, html } = data.markdownRemark;
  useLayoutEffect(() => void hljs.initHighlighting());
  return (
    <div className={styles.post}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

