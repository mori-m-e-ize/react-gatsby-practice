import React from "react"

import Style from "styles/contactform.module.scss"

export default function Input(props) {
  return (
    <div className={Style.inputItems}>
      <label htmlFor={props.id} className={Style.inputLabel}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.inputType}
        placeholder={props.placeholder}
        className={Style.input}
        name={props.name}
      />
    </div>
  )
}
