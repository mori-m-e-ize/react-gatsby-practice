import React from "react"

import SnsLinks from 'components/Molecules/snsLink'
import ToTopBtn from 'components/Atoms/toTopBtn';

import Style from "styles/footer.module.scss"

export default function Footer() {

  return (
    <footer>
      <ToTopBtn />
      <SnsLinks />
      <div className={Style.copyright}>
        <p>© Copyright 2020 Designed by Masafumi Mori</p>
      </div>
    </footer>
  )
}
