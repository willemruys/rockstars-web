import React from "react"
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core"
import useStore from "../../../hooks/playlist/usePlaylist"
import RemoveButton from "../../molecules/AddRemove/RemoveButton"

const useStyles = makeStyles(() => ({
  itemsContainer: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  subHeader: {
    backgroundColor: "black",
    color: "white",
  },
}))

const PlaylistTable = () => {
  const classes = useStyles()
  const state = useStore()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <List dense={true} className={classes.itemsContainer}>
          <ListSubheader className={classes.subHeader}>
            Your songs in playlist
          </ListSubheader>
          {state.songsInPlaylist.map(song => {
            return (
              <ListItem key={song.id}>
                <ListItemIcon>
                  <RemoveButton song={song} />
                </ListItemIcon>
                <ListItemText primary={song.artist} secondary={song.genre} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
}

export default PlaylistTable
