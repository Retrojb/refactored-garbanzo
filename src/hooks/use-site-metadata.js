import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
           query SiteMetadataQuery {
                site {
                    siteMetadata {
                        attachments
                        author
                        email
                        description
                        github
                        hackerRank
                        linkedIn
                        name
                        phone
                        title
                    }
                }
            } 
        `
    )
        
    return site.siteMetadata
}