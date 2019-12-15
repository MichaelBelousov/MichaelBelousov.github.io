import React, { useState, useLayoutEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import styles from './blog.module.scss';
import hljs from 'highlight.js';

export default function (props: any) {
  useLayoutEffect(() => {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }, []);
  return (
    <Layout pageTitle="Blog">
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/a11y-dark.min.css" integrity="sha256-7L/IK7qUTcgTXtfLAxip5Eo+hnp+pSe5htBCh5pYg6o=" crossorigin="anonymous" />
      </Helmet>
      {props.data.allMarkdownRemark.edges.map(({node}, key) => (
        <div className={styles.post} key={key}>
          <h1>{node.frontmatter.title}</h1>
          <h3>{node.frontmatter.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <hr />
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
