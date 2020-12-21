import React from "react"

import useLogos from "./useLogos"
import Img from "gatsby-image"

import Style from "styles/skills.module.scss"

export default function SkillItems(props) {
  const images = useLogos()

  return (
    <div className={Style.skillItems}>
      {images.map(({ node }) => (
        <div className={Style.eachSkills}>
          <Img fluid={node.childImageSharp.fluid} className={Style.logos}/>
          <h3 className={Style.skillNames}>{node.name}</h3>
        </div>
      ))}
    </div>
  )
}
