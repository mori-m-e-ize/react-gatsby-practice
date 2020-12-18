import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuOpenIcon from "@material-ui/icons/MenuOpen"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { grey } from "@material-ui/core/colors"

import { Link } from "gatsby"

const useStyles = makeStyles({
  menuRoot: {
    position: "relative",
    "& div": {
      width: "50%",
      position: "absolute",
      top: 0,
      "& ul": {
        padding: 0,
      },
    },
  },
  menuItems: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      width: "100%",
      textAlign: "center",
      textDecoration: "none",
      color: grey[900],
    },
  },
})

export default function HamburgerMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="hamburger">
      <MenuOpenIcon
        style={{ fontSize: 40, color: "322e18" }}
        aria-controls="hamburger-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="hamburger-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menuRoot}
      >
        <MenuItem className={classes.menuItems}>
          <Link to="/about" className="menulinks">
            About
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItems}>
          <Link to="/work">Work</Link>
        </MenuItem>
        <MenuItem className={classes.menuItems}>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
