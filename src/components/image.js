import React from "react"
import { useStaticQuery, graphql, query } from "gatsby"
import Img from "gatsby-image"

const Image = () => {  
    const data = useStaticQuery(graphql`	
    query {
         file(relativePath: {eq: "cool-guy.jpg"}) {
             childImageSharp {
                 fluid {
                     aspectRatio
                     base64
                     src
                     sizes
                     }
                 }
             }
         }	
     `)
    return <Img fluid={data.file.childImageSharp.fluid} alt="My art work" />
    }	

// export const thumbnailImages = graphql`
//     fragment thumbnailImages on File {
//         childImageSharp{
//             fluid(maxWidth: 200, maxHeight: 200) {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// `
export default Image