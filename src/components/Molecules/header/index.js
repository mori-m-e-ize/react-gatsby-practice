import { Link } from "gatsby"
import React from "react"

import HamburgerMenu from "./hamburgerMenu"

import Style from "styles/header.module.scss"

export default function Header(props) {
  const activeStylesWhite = {
    backgroundColor: "#fff",
    color: "#333",
  }
  const activeStylesDark = {
    backgroundColor: "#322E18",
    color: "#CFCCD6",
  }
  return (
    <header>
      <div className={Style.headWrapper}>
        <div className={Style.logo}>
          {/*　ロゴがあれば以下に挿入 */}
          <Link to="/">{props.siteTitle}</Link>
        </div>
        <HamburgerMenu className={Style.hamburgerIcon} />
        <nav className={props.notSmartphone ? Style.showNavbar : "none"}>
          <Link
            to="/about"
            className={Style.navLinks}
            activeStyle={activeStylesWhite}
          >
            About
          </Link>
          <Link
            to="/work"
            className={Style.navLinks}
            activeStyle={activeStylesDark}
          >
            Work
          </Link>
          <Link
            to="/contact"
            className={Style.navLinks}
            activeStyle={activeStylesWhite}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
