import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import { Link } from "gatsby"

import Style from "styles/project.module.scss"

export default function ProjectPage({ data }) {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className={Style.projectPageContainer}>
        <Link to="/" className={Style.goBack}>
          ← Go back
        </Link>
        {post.map(({ node }) => (
          <div className={Style.projectPageContent} key={node.id}>
            <h1 className={Style.projectTitle}>{node.frontmatter.title}</h1>
            <p className={Style.projectDate}>{node.frontmatter.date}</p>
            <div
              className={Style.htmlContent}
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
            <img
              className={Style.projectImage}
              src={node.frontmatter.image}
              alt={node.frontmatter.name}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            image
          }
          id
        }
      }
    }
  }
`
