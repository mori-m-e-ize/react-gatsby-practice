import { useStaticQuery, graphql } from "gatsby"

const useProjectImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: ASC }
        filter: {
          extension: { eq: "jpg" }
          base: { nin: "main_background.jpg" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
            name
            id
          }
        }
      }
    }
  `)

  return data.allFile.edges
}

export default useProjectImage
