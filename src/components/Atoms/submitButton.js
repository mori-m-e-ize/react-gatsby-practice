import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "80%",
    height: "60px",
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}))

export default function SubmitButton() {
  const classes = useStyles()

  return (
    <Button variant="contained" className={classes.button} type="submit">
      <SendIcon style={{ marginRight: "5px" }} />
      Send
    </Button>
  )
}
