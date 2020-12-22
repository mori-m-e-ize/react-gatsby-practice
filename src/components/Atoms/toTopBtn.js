import React from "react"

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Style from "styles/footer.module.scss"

export default function ToTopBtn() {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  // Load FontAwesome
  library.add(fas, fab)

  return (
    <div className={Style.toTopBtn} onClick={handleClick}>
      <FontAwesomeIcon
        className={Style.topBtnIcon}
        icon={["fas", "chevron-up"]}
      />
    </div>
  )
}
