import React from "react"
import Layout from "components/layout"

import ContactForm from 'components/contactform'

import "./style.scss"

export default function contactPage() {
  return (
    <Layout>
      <div className="contactContainer">
        <h2>This is contact page</h2>
        <ContactForm />
      </div>
    </Layout>
  )
}
