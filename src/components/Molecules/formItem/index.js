import React from "react"
import { navigate } from "gatsby-link"

import Input from "components/Atoms/input"
import TextArea from "components/Atoms/textArea"
import SubmitButton from "components/Atoms/submitButton"

import Style from "styles/contactform.module.scss"

export default function FormItem(props) {

  //TODO: Change below 
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    console.log("submit")
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className={Style.form}
      name="contact"
      method="post"
      action="/work/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-nanme" value="contact" />
      <Input
        inputType={"text"}
        placeholder={"Enter your name"}
        id={"name"}
        label={"Name"}
        onChange={handleChange}
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
      <SubmitButton type="submit"/>
    </form>
  )
}
