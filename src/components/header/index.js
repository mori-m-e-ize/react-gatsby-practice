import { Link } from "gatsby"
import React from "react"

import HamburgerMenu from "./hamburgerMenu"

import "./header.scss"

export default function Header(props) {
  return (
    <header>
      <div className="headWrapper">
        <div className="logo">
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
        <HamburgerMenu className="hamburgerIcon" />
        <nav className={props.notSmartphone ? "showNavbar" : ""}>
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
