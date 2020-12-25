const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//ページの生成
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //プロジェクト詳細ページ用のテンプレートの取得
  const projectTemplate = path.resolve(
    "./src/components/Templates/projectTemplate.js"
  )

  //プロジェクトmd取得するクエリ
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/project/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //各ページの生成
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: projectTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
