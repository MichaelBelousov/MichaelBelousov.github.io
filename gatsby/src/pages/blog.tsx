import React, { useState, useLayoutEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from './blog.module.scss';
import hljs from 'highlight.js';

window.hljs = hljs;

export default function (props: any) {
  console.log(props);
  useLayoutEffect(() => {
    console.log('highlighting...');
    hljs.initHighlighting();
  }, []);
  return (
    <Layout pageTitle="Blog">
      {props.data.allMarkdownRemark.edges.map(({node}, key) => (
        <div className={styles.post} key={key}>
          <h1>{node.frontmatter.title}</h1>
          <h3>{node.frontmatter.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
