const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const imageInlineSizeLimit = 4 * 1024

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          // "oneOf" will traverse all following loaders until one will
          // match the requirements. When no loader matches it will fall
          // back to the "file" loader at the end of the loader list.
          oneOf: [
            // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            // A missing `test` is equivalent to a match.
            {
              test: /\.bmp$/,
              loader: require.resolve("url-loader"),
              options: {
                limit: imageInlineSizeLimit,
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                require.resolve("file-loader"),
                require.resolve("image-webpack-loader"),
              ],
            },
            // markdown loading chain
            {
              test: /\.md$/,
              use: [
                require.resolve("html-loader"),
                require.resolve("markdown-loader"),
              ],
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: "blog" })
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) =>
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/BlogPage.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  )
}
