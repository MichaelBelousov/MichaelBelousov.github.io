import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './blog.module.scss'

export default function(props: any) {
  const perYear = React.useMemo(
    () =>
      props.data.allMarkdownRemark.edges.reduce((prev, { node }) => {
        const [year] = node.frontmatter.date.match(/\d+$/)
        const key = year
        if (!prev.has(key)) prev.set(key, [])
        prev.get(key).push(node)
        return prev
      }, new Map<string, string[]>()),
    [props.data.allMarkdownRemark.edges],
  )

  return (
    <Layout pageTitle="Blog">
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
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } },
      filter: { frontmatter: {
        date: { ne: null }
        title: { ne: "How I learned to love Zig's diagnostic pattern" }
      } },
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
