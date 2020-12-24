import React from "react"
import Card from "components/Atoms/cards"
import Style from "styles/project.module.scss"

import useProjectImage from "./useProjectImages"

export default function Project(props) {
  const projectImages = useProjectImage()

  console.log(projectImages)
  return (
    <div className={Style.projectContainer}>
      <h2 className={Style.sectionTitle}>Projects</h2>
      <div className={Style.projectItemContainer}>
        {/* ループでデータを取得 */}
        {projectImages.map(({ node }) => (
          <Card
            key={node.id}
            bgImagePath={node.childImageSharp.fluid.src}
            projectName={node.name}
          />
        ))}
      </div>
    </div>
  )
}
