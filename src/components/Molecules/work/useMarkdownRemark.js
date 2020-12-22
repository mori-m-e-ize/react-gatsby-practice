import { useStaticQuery, graphql } from "gatsby"

export const useMarkdownRemark = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query workHistory {
        allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
          nodes {
            frontmatter {
              date
              position
              title
              description
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.nodes
}
