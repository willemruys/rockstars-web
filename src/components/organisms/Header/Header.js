import { AppBar, makeStyles, MenuItem, Container } from "@material-ui/core"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { BadgeComponent } from "../../molecules/Badge/Badge"
import Alert from "@material-ui/lab/Alert"
import axios from "axios"
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
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    const getConnection = async () => {
      const url = process.env.GATSBY_API_URL + "/artists"
      const res = await axios.get(url)
      console.log(url)
      // console.log(res.status)
    }
    getConnection()
  }, [isConnected])

  const classes = useStyles()
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Alert severity="warning">You seem disconnected from the server</Alert>
      <MenuItem>
        <h1>{siteTitle}</h1>
      </MenuItem>
      <Container>
        <BadgeComponent />
      </Container>
      <Container>
        <Link to="/artists">Your artists</Link>
      </Container>
      <Container>
        <Link to="/songs">All songs</Link>
      </Container>
    </AppBar>
  )
}

export default Header
