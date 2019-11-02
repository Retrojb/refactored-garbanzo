import React from "react"
import container from "../style/container.module.css"

export default props => (
    <div className={container.image_container}>
        <img src={props.image} />
    </div>
)
// export const thumbnailImages = graphql`
//     fragment thumbnailImages on File {
//         childImageSharp{
//             fluid(maxWidth: 200, maxHeight: 200) {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// `

//Note
//sub-component ie header
// `export default props => <tag>{props.WHATEVER YOU WANT TO CALL THIS TAG ARGUEMENT}</tag>`
//  on page that use sub-component add the `<Subcomponent WHATEVER YOU WANT TO CALL THIS TAG ARGUEMENT="what ever prop you want to declare" />`