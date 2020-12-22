import { Link } from "gatsby"
import React from "react"

import HamburgerMenu from "./hamburgerMenu"

import Style from "styles/header.module.scss"

export default function Header(props) {
  return (
    <header>
      <div className={Style.headWrapper}>
        <div className={Style.logo}>
          {/*TODO: Need to modify here */}
          {/* <img style={{ width: "50px" }} src="../images/logo.png" /> */}
          <Link
            to="/"
          >
            {props.siteTitle}
          </Link>
        </div>
        <HamburgerMenu className={Style.hamburgerIcon} />
        <nav className={props.notSmartphone ? Style.showNavbar : "none"}>
          <Link to="/about" className={Style.navLinks}>
            About
          </Link>
          <Link to="/work" className={Style.navLinks}>
            Work
          </Link>
          <Link to="/contact" className={Style.navLinks}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
