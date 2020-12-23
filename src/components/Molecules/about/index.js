import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { grey } from "@material-ui/core/colors"
import GetAppIcon from "@material-ui/icons/GetApp"

import Style from "styles/about.module.scss"

export default function About() {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[500],
      width: "50%",
      height: 50,
      margin: 20,
      "&:hover": {
        backgroundColor: grey[900],
        color: theme.palette.getContrastText(grey[900]),
      },
    },
  }))(Button)

  return (
    <div className={Style.aboutContainer}>
      <div className={Style.aboutItemContainer}>
        <div className={Style.aboutItems}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet placerat quam. Donec in sem nec augue tincidunt volutpat.
            Curabitur eget placerat quam, sit amet vestibulum tortor. Mauris
            convallis est nec tortor varius consequat. Vestibulum viverra lectus
            eu enim volutpat, id blandit sem vestibulum. Cras auctor varius
            lacinia. Maecenas commodo, tortor vitae congue ultrices, libero
            lacus mattis nulla, et rhoncus est libero et est. Nunc dapibus nunc
            vel mi vestibulum dictum.
          </p>
        </div>
        <div className={Style.aboutItems}>
          <h2>Contact Details</h2>
          <ul>
            <li>Masafumi Mori</li>
            <li>Tokyo, Japan</li>
            <li>m.mori@e-ize.jp</li>
          </ul>
        </div>
      </div>
      <ColorButton className={Style.downloadBtn}>
        <GetAppIcon style={{ marginRight: "5px" }} />
        Download Resume
      </ColorButton>
    </div>
  )
}
