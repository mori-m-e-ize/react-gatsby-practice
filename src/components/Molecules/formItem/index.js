import React from "react"
import { navigate } from "gatsby-link"

import Input from "components/Atoms/input"
import TextArea from "components/Atoms/textArea"
import SubmitButton from "components/Atoms/submitButton"

import Style from "styles/contactform.module.scss"

export default function FormItem(props) {
  const handleSubmit = e => {
    e.preventDefault()
    let myForm = document.getElementById("contactform")
    let formData = new FormData(myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate(myForm.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className={Style.form}
      name="contact"
      method="post"
      action="/success.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="contactform"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input
        inputType={"text"}
        placeholder={"Enter your name"}
        id={"name"}
        label={"Name"}
      />
      <Input
        inputType={"email"}
        placeholder={"Enter your email"}
        id={"email"}
        label={"Email"}
      />
      <Input
        inputType={"text"}
        placeholder={"Enter your subject"}
        id={"subject"}
        label={"Subject"}
      />
      <TextArea
        placeholder={"Wrtie your message here"}
        id={"message"}
        label={"Message"}
      />
      <SubmitButton onClick={handleSubmit} />
    </form>
  )
}
