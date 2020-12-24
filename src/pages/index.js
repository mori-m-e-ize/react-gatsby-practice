import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Top from "components/Molecules/top"
import About from "components/Molecules/about"
import Work from "components/Molecules/work"
import Skill from "components/Molecules/skills"
import Project from "components/Molecules/project"
import ContactForm from "components/Molecules/contactform"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Top />
    <About />
    <Work />
    <Skill />
    <Project />
    <ContactForm />
  </Layout>
)

export default IndexPage
