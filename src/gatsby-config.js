/** @type {import("gatsby").GatsbyConfig} */

module.exports = {
  siteMetadata: {
    title: `Mike Belousov's Website`,
    description: `Mike Belousov's Website`,
    author: `Mike Belousov`,
    siteUrl: `https://mikemikeb.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike Belousov's website`,
        short_name: `mikemikeb.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-articles`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `:LANG>`,
              aliases: {
                sh: `bash`
              },
            },
          }
        ],
      },
    },
    // incomplete copy of the following:
    // https://www.npmjs.com/package/gatsby-plugin-feed
    // which shows how to generate an RSS feed from our blog data
    {
      resolve: `gatsby-plugin-feed`,
      /** @type {import("gatsby-plugin-feed").IPluginOptions} */
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                  filter: { frontmatter: { date: { ne: null } } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              }));
            },
            output: "/rss.xml",
            title: "Mike Belousov's blog",
          }
        ],
      },
    },
    'gatsby-plugin-pnpm',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Noto Serif`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap`,
          },
        ],
      },
    },
    'gatsby-plugin-remove-fingerprints'
  ],
}
