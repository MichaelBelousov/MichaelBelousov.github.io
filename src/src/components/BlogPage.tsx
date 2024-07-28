import React from "react"
import Layout from "./layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import SEO from "./seo"

// FIXME: merge these
import * as styles from "../components/blog.module.scss"
import * as navStyles from "../pages/blog.module.scss"

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

  const sidebar = (
    <nav className={navStyles.blogsSidebar}>
      <h2>Other posts</h2>
      {Array.from(perYear.entries(), ([year, edges]) => (
        <div key={year} className={styles.compactBlogListing}>
          <h3><strong>{year}</strong></h3>
          <div>
            {edges.map((node, key) => (
              <div key={key}>
                <a href={node.fields.slug} className={navStyles.blogLink} style={{ margin: 0 }}>
                  {node.frontmatter.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
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
      {sidebar}
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
      filter: { frontmatter: {
        date: { ne: null }
        title: { ne: "How I learned to love Zig's diagnostic pattern" }
      } }
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
