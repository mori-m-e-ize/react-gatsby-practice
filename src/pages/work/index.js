import React from "react"
import Layout from "../../components/layout"
import Work from "components/Molecules/work"

import Style from "styles/work.module.scss"

export default function workPage() {
  return (
    <Layout>
      <div className={Style.workContainer}>
        <h1>This is work page</h1>
        <Work />
      </div>
    </Layout>
  )
}
