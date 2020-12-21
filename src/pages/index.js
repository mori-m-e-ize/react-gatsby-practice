import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../components/main"
import About from '../components/about'
import Work from '../components/work'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Main sectionTitle="ダミータイトル" />
    <About />
    <Work />
    <Main sectionTitle="ダミータイトル" />
    <Main sectionTitle="ダミータイトル" />
  </Layout>
)

export default IndexPage
