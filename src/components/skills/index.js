import React from "react"
import SkillItems from 'components/Molecules/skillItems'

import Style from "styles/skills.module.scss"

export default function Skills() {

  return (
    <div className={Style.skillContainer}>
        <h2 className={Style.sectionTitle}>SKILLS</h2>
        <SkillItems />
    </div>
  )
}
