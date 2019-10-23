import { useStaticQuery, graphql } from "gatsby"
import React from 'react'

export const useImageMetadata = () => {
    const { image } = useStaticQuery(
        graphql`
          query ImageQuery {
            allImageJson {
                nodes {
                imgSrc {
                    id
                    relativePath
                    name
                    internal {
                    type
                    }
                }
                }
            }

        }`
    )
      return getImages(image)
}

function getImages(data) {
    const imageArray = [];
    data.allImageJson.edges.forEach(item => 
        imageArray.push(
            <div key={item.node.imgSrc}>
                <img alt="something">{item.node.imgSrc}</img>
                <h5>{item.node.id}</h5>
            </div>
        ))
    return imageArray;
}