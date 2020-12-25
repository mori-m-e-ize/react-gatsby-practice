import { useStaticQuery, graphql } from "gatsby"

const useLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "png" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            id
          }
        }
      }
    }
  `)

  return data.allFile.edges
}

export default useLogos
