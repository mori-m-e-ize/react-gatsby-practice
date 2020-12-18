import React from "react"
import { Link } from "gatsby"

import ToTopBtn from './toTopBtn';

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "./footer.css"

export default function Footer() {
  // Load FontAwesome
  library.add(fas, fab)

  return (
    <footer>
      <ToTopBtn />
      <div className="footWrapper">
        <Link to="https://twitter.com/masadev123" className="footLinks">
          <FontAwesomeIcon className="footIcons twitter" icon={["fab", "twitter"]} />
        </Link>
        <Link to="https://ja-jp.facebook.com/" className="footLinks">
          <FontAwesomeIcon className="footIcons facebook" icon={["fab", "facebook"]} />
        </Link>
        <Link to="https://www.linkedin.com/login/ja" className="footLinks">
          <FontAwesomeIcon className="footIcons github" icon={["fab", "github"]} />
        </Link>
      </div>
      <div className="copyright">
        <p>© Copyright 2020 Designed by Masafumi Mori</p>
      </div>
    </footer>
  )
}
