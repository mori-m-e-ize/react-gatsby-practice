import React from "react"

import Style from "styles/work.module.scss"

function WorkItems(props) {
  return (
    <div className={Style.workItems}>
      <h3 className={Style.workTitle}>{props.workTitle}</h3>
      <div className={Style.positionAndDate}>
        <h4 className={Style.position}>{props.workPosition}</h4>
        <p className={Style.date}>{props.workDate}</p>
      </div>
        <p className={Style.decription}>{props.workDescription}</p>
    </div>
  )
}

export default WorkItems
