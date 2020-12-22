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
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "700",
              paddingLeft: "20px",
            }}
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
