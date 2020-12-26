import React from "react"

import FormItem from "components/Molecules/formItem"

import Style from "styles/contactform.module.scss"

export default function ContactForm() {
  return (
    <div className={Style.contactContainer}>
      <h2 className={Style.sectionTitle}>CONTACT</h2>
      <FormItem />
    </div>
  )
}
