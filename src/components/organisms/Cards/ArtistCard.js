import {
  Card,
  CardContent,
  CardActionArea,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@material-ui/core"
import React, { useState } from "react"
import Button from "../../atoms/Button/Button"
import Icon from "@material-ui/core/Icon"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
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
                        <AddIcon color="primary" />
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
