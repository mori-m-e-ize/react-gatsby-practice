import React, { useState, useEffect } from "react"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { Link } from "gatsby"

import Style from "styles/project.module.scss"

export default function Card(props) {
  return (
    <>
      <Link to={props.link} className={Style.cards}>
        <img src={props.bgImagePath} className={Style.projectImage} />
        <div className={Style.projectContent}>
          <h3 className={Style.projectName}>{props.projectName}</h3>
          <div className={Style.hoverBox}>
            <div className={Style.projectLink}>
              <p>
                Visit Project
                <ArrowForwardIosIcon
                  fontSize="small"
                  className={Style.linkIcon}
                />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
