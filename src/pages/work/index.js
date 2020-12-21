import React from "react"
import Layout from "../../components/layout"
import Work from 'components/work'

import './style.scss'

export default function workPage() {
  return (
    <Layout>
      <div className="workContainer">
        <h2>This is work page</h2>
        <Work />
      </div>
    </Layout>
  )
}