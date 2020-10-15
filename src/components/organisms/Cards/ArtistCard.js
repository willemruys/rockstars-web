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
import Icon from "@material-ui/core/Icon"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"

import axios from "axios"
const ArtistCard = ({ artist }) => {
  const addSongHandler = async song => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    axios
      .post(url, { ...song })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const removeSongHandler = song => {
    // DELETE api_url/personal-playlist/id
    console.log(song)
    const { id } = song
    const url = process.env.GATSBY_API_URL + "personal-playlist" + "/" + id
    axios
      .delete(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

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
                        <IconButton onClick={() => addSongHandler(song)}>
                          <AddIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => removeSongHandler(song)}>
                          <RemoveIcon />
                        </IconButton>
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
