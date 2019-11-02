/* See: https://www.gatsbyjs.org/docs/node-apis/ */


// const path = require(`path`)

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