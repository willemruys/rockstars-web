import {
  AppBar,
  makeStyles,
  MenuItem,
  Container,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { BadgeComponent } from "../../molecules/Badge/Badge"

import PeopleIcon from "@material-ui/icons/People"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import axios from "axios"
const useStyles = makeStyles({
  appBar: {
    backgroundColor: "black",
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
      <Toolbar>
        <Link color="white" to="/">
          <Typography type="h5">{siteTitle}</Typography>
        </Link>
        <IconButton>
          <BadgeComponent />
        </IconButton>
        <IconButton href="/artists">
          <PeopleIcon color="primary" />
        </IconButton>
        <IconButton href="/songs">
          <LibraryMusicIcon color="primary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
