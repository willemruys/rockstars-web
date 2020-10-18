import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core"

import React from "react"
import AddButton from "../../molecules/AddRemove/AddButton"

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

const SongsTables = ({ songs }) => {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List dense={true} className={classes.itemsContainer}>
            <ListSubheader className={classes.subHeader}>
              All songs
            </ListSubheader>
            {songs.map(song => {
              return (
                <ListItem key={song.id}>
                  <ListItemIcon>
                    <AddButton song={song} />
                  </ListItemIcon>
                  <ListItemText primary={song.artist} secondary={song.genre} />
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default SongsTables
