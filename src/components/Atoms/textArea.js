import React from "react"

import Style from 'styles/contactform.module.scss'

export default function TextArea(props) {
  
  return (
    <div className={Style.textItem}>
      <label htmlFor={props.id} className={Style.inputLabel}>{props.label}</label>
      <textarea
        id={props.id}
        type={props.inputType}
        placeholder={props.placeholder}
        className={Style.textarea}
        rows={7}
      />
    </div>
  )
}
