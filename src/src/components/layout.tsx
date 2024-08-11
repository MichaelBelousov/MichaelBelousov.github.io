import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo"
import * as styles from "./layout.module.scss"

interface LayoutProps {
  pageTitle: string
  pageDesc?: string
}

const Layout = ({
  pageTitle,
  pageDesc,
  children,
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <div className={styles.pageWrapper}>
      <SEO title={pageTitle} description={pageDesc} />
      <Header/>
      <main>{children}</main>
      <footer style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="/rss.xml">subscribe to my rss feed</a>
      </footer>
    </div>
  )
}
export default Layout
