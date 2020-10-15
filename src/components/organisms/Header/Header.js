import { AppBar, styled, Typography, makeStyles } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#00000",
  },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <div>
        <h1>{siteTitle}</h1>
      </div>
    </AppBar>
  )
}

export default Header
