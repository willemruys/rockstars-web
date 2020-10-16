import {
  Card,
  CardContent,
  CardActionArea,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
} from "@material-ui/core"
import React, { useState } from "react"
import Button from "../../atoms/Button/Button"

import axios from "axios"
import AddButton from "../../molecules/AddRemove/AddButton"
import RemoveButton from "../../molecules/AddRemove/RemoveButton"
const ArtistCard = ({ artist }) => {
  return (
    <>
      <Card>
        <CardContent>
          <h4>{artist.name}</h4>
          <p>Songs:</p>
          <List>
            {artist.songs.length !== 0 &&
              artist.songs.map(song => {
                return (
                  <>
                    <ListItem>
                      <ListItemIcon>
                        <AddButton />
                        <RemoveButton />
                      </ListItemIcon>
                      <ListItemText primary={song.name} />
                    </ListItem>
                  </>
                )
              })}
            {artist.songs.length === 0 && <p>No songs available</p>}
          </List>
        </CardContent>
        <CardActionArea>
          <Button label="View artist" type="secondary" />
        </CardActionArea>
      </Card>
    </>
  )
}

export default ArtistCard
