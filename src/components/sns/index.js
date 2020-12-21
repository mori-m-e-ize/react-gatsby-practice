import React from "react"
import { Link } from "gatsby"

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "./sns.scss"

export default function SnsLinks({ setColor }) {
  // Load FontAwesome
  library.add(fas, fab)

  return (
    <div className="snsLinkWrapper">
      <Link to="https://twitter.com/masadev123" className="snsLinks">
        <FontAwesomeIcon
          className="snsIcons twitter"
          icon={["fab", "twitter"]}
          style={{ color: setColor }}
        />
      </Link>
      <Link to="https://ja-jp.facebook.com/" className="snsLinks">
        <FontAwesomeIcon
          className="snsIcons facebook"
          icon={["fab", "facebook"]}
          style={{ color: setColor }}
        />
      </Link>
      <Link to="https://www.linkedin.com/login/ja" className="snsLinks">
        <FontAwesomeIcon
          className="snsIcons github"
          icon={["fab", "github"]}
          style={{ color: setColor }}
        />
      </Link>
    </div>
  )
}
