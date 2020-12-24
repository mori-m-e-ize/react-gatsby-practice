import React from "react"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

import Style from "styles/project.module.scss"

export default function Cards(props) {
  return (
    <div className={Style.cards}>
      <img src={props.bgImagePath} className={Style.projectImage} />
      <div className={Style.projectContent}>
        <h3 className={Style.projectName}>{props.projectName}</h3>
        <div className={Style.hoverBox}>
          <a href="/" className={Style.projectLink}>
            Visit Project{" "}
            <ArrowForwardIosIcon fontSize="small" className={Style.linkIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}
