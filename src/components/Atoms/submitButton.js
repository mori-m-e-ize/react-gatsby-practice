import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles(theme => ({
  //TODO: Change style
  button: {
    margin: theme.spacing(1),
    width: "80%",
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    }
  },
}))

export default function SubmitButton() {
  const classes = useStyles()

  return (
    <Button variant="contained" className={classes.button}>
      <SendIcon style={{marginRight: "2px"}} />
        Send
    </Button>
  )
}
