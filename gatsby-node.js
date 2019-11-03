/* See: https://www.gatsbyjs.org/docs/node-apis/ */


const path = require(`path`)
exports.createPages = async({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
      reporter.panicOnBuild(`Error with graphql query`)
      return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {},
      })
  })
}

// exports.onPostBuild = ({ reporters}) => {
//     reporters.info(`Success`)
// }

// exports.onCreateNode = ({ node }) => {
//     console.log(node.internal.type)
// }
// exports.onCreateNode = ({ actions, createNodeId, createContentDigest }) => {
//     const images = [
//         { name: "image" , type: "File"}
//     ]
//     const imgContent = JSON.stringify(images)
//     images.forEach( img => {
//         const node = {
//             id: createNodeId(`Data-${img.id}`),
//             name: img.name,
//             children:[createNodeId(`Data-${img.imgSrc}`)],
//             parent: null,
//             content: ``,
//             internal: {
//                 type: `File`,
//                 content: imgContent,
//                 contentDigest: createContentDigest(img)
//             },
//             img
//         }
//         actions.createNode(node)
//     })
// }