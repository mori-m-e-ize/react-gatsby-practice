import React from "react"

import Input from "components/Atoms/input"
import TextArea from "components/Atoms/textArea"
import SubmitButton from "components/Atoms/submitButton"

import Style from "styles/contactform.module.scss"

export default function FormItem(props) {
  return (
    <form
      className={Style.form}
      name="contactForm"
      method="POST"
      action="/success.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <Input
        inputType={"text"}
        placeholder={"Enter your name"}
        id={"name"}
        label={"Name"}
        name={"name"}
      />
      <Input
        inputType={"email"}
        placeholder={"Enter your email"}
        id={"email"}
        label={"Email"}
        name={"email"}
      />
      <Input
        inputType={"text"}
        placeholder={"Enter your subject"}
        id={"subject"}
        label={"Subject"}
        name={"subject"}
      />
      <TextArea
        placeholder={"Wrtie your message here"}
        id={"message"}
        label={"Message"}
        name={"message"}
      />
      <SubmitButton type="submit" />
    </form>
  )
}
