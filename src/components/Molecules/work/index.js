import React from "react"
import WorkItems from "components/Molecules/workItems"
import { useMarkdownRemark } from "./useMarkdownRemark"

import Style from "styles/work.module.scss"

export default function Work() {
  // マークダウン内のデータを取得
  const data = useMarkdownRemark()

  return (
    <div className={Style.workContainer}>
      <h2 className={Style.sectionTitle}>WORK</h2>
      <div className={Style.workItemBox}>
        {/*　Work情報を取得してループで格納
       データ追加時は、work-XXX.mdファイルを作成*/}
        {data.map(({ frontmatter, id }) => (
          <WorkItems
            workTitle={frontmatter.title}
            workDate={frontmatter.date}
            workPosition={frontmatter.position}
            workDescription={frontmatter.description}
            key={id}
          />
        ))}
      </div>
    </div>
  )
}
