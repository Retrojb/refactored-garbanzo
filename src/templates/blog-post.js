import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import container from '../style/container.module.css'

export default function Template({ data }) {
    const { markdownRemark: post } = data //holds your post data data.markdownRemark
    return (

        <div className={container.blog_container}>
            <Helmet title={`Retro Hour - ${post.frontmatter.title}`} />
                <div className={container.blog_post}>
                    <h1>{ post.frontmatter.title }</h1>
                        <div 
                            className={container.blog_content} 
                            dangerouslySetInnerHTML={{ __html: post.html }} 
                        />
                </div>
        </div>
    )
}

export const pageQuery = graphql`
{
  markdownRemark {
    html
    frontmatter {
      date(formatString: "MM DD, YYYY")
      path
      title
    }
  }
}
`