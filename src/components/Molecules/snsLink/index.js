import React from "react"

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Style from "styles/snsLink.module.scss"

export default function SnsLinks({ setColor }) {
  // Load FontAwesome
  library.add(fas, fab)

  return (
    <div className={Style.snsLinkWrapper}>
      <a href="https://twitter.com/masadev123" className={Style.snsLinks}>
        <FontAwesomeIcon
          className={`${Style.snsIcons} ${Style.twitter}`}
          icon={["fab", "twitter"]}
          style={{ color: setColor }}
        />
      </a>
      <a href="https://ja-jp.facebook.com/" className={Style.snsLinks}>
        <FontAwesomeIcon
          className={`${Style.snsIcons} ${Style.facebook}`}
          icon={["fab", "facebook"]}
          style={{ color: setColor }}
        />
      </a>
      <a href="https://www.linkedin.com/login/ja" className={Style.snsLinks}>
        <FontAwesomeIcon
          className={`${Style.snsIcons} ${Style.github}`}
          icon={["fab", "github"]}
          style={{ color: setColor }}
        />
      </a>
    </div>
  )
}
