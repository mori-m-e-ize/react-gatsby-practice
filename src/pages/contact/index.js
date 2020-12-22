import React from "react"
import Layout from "components/layout"

import ContactForm from 'components/Molecules/contactform'

import Style from "styles/contactform.module.scss"

export default function contactPage() {
  return (
    <Layout>
      <div className={Style.contactContainer}>
        <h2>This is contact page</h2>
        <ContactForm />
      </div>
    </Layout>
  )
}
