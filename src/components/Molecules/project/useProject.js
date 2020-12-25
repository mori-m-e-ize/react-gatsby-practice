import { useStaticQuery, graphql } from "gatsby"

export const useProject = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/project/" } } }
        sort: { fields: fields___slug }
      ) {
        edges {
          node {
            fields {
              slug
            }
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
  `)

  return allMarkdownRemark.edges
}
