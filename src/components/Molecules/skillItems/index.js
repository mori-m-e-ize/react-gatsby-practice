import React from "react"

import useLogos from "./useLogos"
import Img from "gatsby-image"

import Style from "styles/skills.module.scss"

export default function SkillItems() {
  const images = useLogos()

  return (
    <div className={Style.skillItems}>
      {images.map(({ node }) => (
        <div className={Style.eachSkills} key={node.id}>
          <Img fluid={node.childImageSharp.fluid} className={Style.logos} />
          <h3 className={Style.skillNames}>{node.name}</h3>
        </div>
      ))}
    </div>
  )
}
