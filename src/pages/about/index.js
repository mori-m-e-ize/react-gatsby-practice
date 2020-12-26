import React from "react"
import Layout from "components/layout"
import About from "components/Molecules/about"
import Style from "styles/about.module.scss"

export default function AboutPage() {
  return (
    <Layout>
      <div className={Style.aboutContainer}>
        <h1>This is about page</h1>
        <About />
      </div>
    </Layout>
  )
}
