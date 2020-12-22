import React from "react"
import SnsLinks from "components/Molecules/snsLink"

import Style from  "styles/top.module.scss"

export default function Top() {

  const setColor = "white";
  
  return (
    <div className={Style.topContainer}>
      <div className={Style.topItemWrapper}>
        <div className={Style.topHead}>
          <h2>I'm Masafumi Mori.</h2>
        </div>
        <div className={Style.topDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo
            est. Nullam tristique et quam id lobortis.
          </p>
        </div>
        <div className={Style.topLinkBox}>
          <SnsLinks setColor={setColor} />
        </div>
      </div>
    </div>
  )
}
