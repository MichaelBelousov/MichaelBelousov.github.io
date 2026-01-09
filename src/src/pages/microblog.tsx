import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './microblog.module.scss'

export default function(props: any) {
  const tweets = props.data.allMarkdownRemark.edges

  return (
    <Layout pageTitle="Microblog">
      <div className={styles.microblogContainer}>
        <div className={styles.feedHeader}>
          <h1>Microblog</h1>
          <p className={styles.subtitle}>My thoughts, short and sweet</p>
        </div>
        <div className={styles.tweetFeed}>
          {tweets.map(({ node }, index) => {
            const tweetId = node.fields.slug.split('/').filter(Boolean).pop()
            return (
              <article key={index} id={tweetId} className={styles.tweet}>
                <div className={styles.tweetHeader}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>Mike Belousov</span>
                    <span className={styles.username}>@mikemikeb</span>
                  </div>
                  <a href={`#${tweetId}`} className={styles.timestamp}>
                    <time>
                      {node.frontmatter.date}
                    </time>
                  </a>
                </div>
                <div
                  className={styles.tweetContent}
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } },
      filter: { fields: { collection: { eq: "tweets" } } }
      limit: 100
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMM D, YYYY h:mm A")
          }
          fields {
            slug
            collection
          }
        }
      }
    }
  }
`
