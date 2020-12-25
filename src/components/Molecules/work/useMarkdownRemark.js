import { useStaticQuery, graphql } from "gatsby"

export const useMarkdownRemark = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/work/" } } }
          sort: { order: ASC, fields: frontmatter___date }
        ) {
          nodes {
            frontmatter {
              date
              position
              title
              description
            }
            id
          }
        }
      }
    `
  )
  return allMarkdownRemark.nodes
}
