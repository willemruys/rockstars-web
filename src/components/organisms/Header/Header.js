import { AppBar, makeStyles, MenuItem, Container } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import { BadgeComponent } from "../../molecules/Badge/Badge"

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#00000",
  },
  // menuItem: {
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <MenuItem>
        <h1>{siteTitle}</h1>
      </MenuItem>
      <Container>
        <BadgeComponent />
      </Container>
      <Container>
        <Link to="/artists">Your artists</Link>
      </Container>
    </AppBar>
  )
}

export default Header
