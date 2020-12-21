import React from "react"

import SnsLinks from '../sns'
import ToTopBtn from './toTopBtn';

import "./footer.scss"

export default function Footer() {

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
