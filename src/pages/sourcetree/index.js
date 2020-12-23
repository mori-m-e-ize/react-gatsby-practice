import React from "react"
import Layout from "../../components/layout"
import Work from "components/Molecules/work"

import Style from "styles/work.module.scss"

export default function sourceTreePage() {
  return (
    <Layout>
      <div className={Style.workContainer}>
        <h2>This is sourcetree page</h2>
        <Work />
      </div>
    </Layout>
  )
}
