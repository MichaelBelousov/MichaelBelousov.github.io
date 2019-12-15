import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import SEO from './seo';
import './layout.scss';

interface LayoutProps {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site { siteMetadata { title } }
    }
  `);

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  );
};

export default Layout
