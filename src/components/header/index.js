import { Link } from "gatsby"
import React from "react"

import HamburgerMenu from "./hamburgerMenu"

import "./header.css"

export default function Header({ notSmartphone, siteTitle }) {
  return (
    <header>
      <div className="headWrapper">
        <div className="logo">
          {/*TODO: Need to modify here */}
          {/* <img style={{ width: "50px" }} src="../images/logo.png" /> */}
          <p style={{ fontWeight: 700 }}>{ siteTitle }</p>
        </div>
        <HamburgerMenu className="hamburgerIcon" />
        <nav className={notSmartphone ? "showNavbar" : ""}>
          <Link to="/about" className="navLinks">
            About
          </Link>
          <Link to="/work" className="navLinks">
            Work
          </Link>
          <Link to="/contact" className="navLinks">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
