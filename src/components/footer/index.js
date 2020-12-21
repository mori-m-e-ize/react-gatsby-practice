import React from "react"
import { Link } from "gatsby"

import SnsLinks from '../sns'
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
      <SnsLinks />
      <div className="copyright">
        <p>© Copyright 2020 Designed by Masafumi Mori</p>
      </div>
    </footer>
  )
}