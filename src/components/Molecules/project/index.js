import React from "react"
import Card from "components/Atoms/cards"
import Style from "styles/project.module.scss"

import { useProject } from "./useProject"

export default function Project(props) {
  // // プロジェクトの画像と情報取得
  const data = useProject()

  return (
    <div className={Style.projectContainer}>
      <h2 className={Style.sectionTitle}>PROJECTS</h2>
      <div className={Style.projectItemContainer}>
        {/* ループでデータを取得 */}
        {data.map(({ node }) => (
          <Card
            key={node.id}
            bgImagePath={node.frontmatter.image}
            projectName={node.frontmatter.title}
            link={node.fields.slug}
          />
        ))}
      </div>
    </div>
  )
}
