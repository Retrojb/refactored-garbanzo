import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

// import { Helmet } from "r seact-helmet"


 const BlogList =({ data }) => {
    const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h2>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h2>
              <h5>{post.frontmatter.date}</h5>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`


export default BlogList