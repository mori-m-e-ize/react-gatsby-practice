import React from "react"
import { graphql } from "gatsby"
import WorkItems from "../Molecules/WorkItems"
import { useMarkdownRemark } from "./useMarkdownRemark"

import Style from "styles/work.module.scss"

export default function Work() {
  // マークダウン内のデータを取得
  const data = useMarkdownRemark()

  return (
    <div className={Style.workContainer}>
      <h2 className={Style.sectionTitle}>WORK</h2>
      {/*　Work情報を取得してループで格納
       データ追加時は、work-XXX.mdファイルを作成*/}
      {data.map(({ frontmatter }) => (
        <WorkItems
          workTitle={frontmatter.title}
          workDate={frontmatter.date}
          workPosition={frontmatter.position}
          workDescription={frontmatter.description}
          key={frontmatter}
        />
      ))}
    </div>
  )
}
