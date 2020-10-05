import React, { useLayoutEffect } from "react"
import hljs from "highlight.js"
import Layout from "./layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import SEO from "./seo"

import styles from "./blog.module.scss"

export default function BlogPost(props: any) {
  useLayoutEffect(() => {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
  }, [])

  const post = props.data.markdownRemark

  console.log(post)

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/a11y-dark.min.css"
          integrity="sha256-7L/IK7qUTcgTXtfLAxip5Eo+hnp+pSe5htBCh5pYg6o="
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className={styles.post}>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
