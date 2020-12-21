import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from '../components/about'
import Work from '../components/work'
import Skill from 'components/skills'

import JavaLogo from 'images/Java.png';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Main sectionTitle="ダミータイトル" />
    <About />
    <Work />
    <Skill />
  </Layout>
)

export default IndexPage
