import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Main from "components/main"
import About from 'components/about'
import Work from 'components/work'
import Skill from 'components/skills'
import ContactForm from 'components/contactform'



const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Main sectionTitle="ダミータイトル" />
    <About />
    <Work />
    <Skill />
    <ContactForm />
  </Layout>
)

export default IndexPage
