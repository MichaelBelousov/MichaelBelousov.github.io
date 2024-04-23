import React, { useLayoutEffect } from "react"
import Layout from "./layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import SEO from "./seo"

import * as styles from "./blog.module.scss"

export default function BlogPost(props: any) {
  const post = props.data.markdownRemark

  const perYear = React.useMemo(
    () =>
      props.data.allMarkdownRemark.edges.reduce((prev, { node }) => {
        const [year] = node.frontmatter.date.match(/\d+$/)
        const key = year
        if (!prev.has(key)) prev.set(key, [])
        prev.get(key).push(node)
        return prev
      }, new Map<string, string[]>()),
    [],
  )

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <Helmet>
        <link
          rel="stylesheet"
          // FIXME: move to gatsby layer
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/paraiso-dark.min.css"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div>
        {Array.from(perYear.entries(), ([year, edges]) => (
          <div key={year}>
            {year}
            <ul>
              {edges.map((node, key) => (
                <li key={key}>
                  <a href={node.fields.slug} className={styles.blogLink}>
                    <strong>{node.frontmatter.title}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
        date(formatString: "MMMM D, YYYY")
      }
    }

    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 100
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

/*
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
*/
