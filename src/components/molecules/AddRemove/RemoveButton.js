import { IconButton } from "@material-ui/core"
import RemoveIcon from "@material-ui/icons/Remove"
import React from "react"
import axios from "axios"
const RemoveButton = ({ song }) => {
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
    <IconButton onClick={() => removeSongHandler(song)}>
      <RemoveIcon />
    </IconButton>
  )
}

export default RemoveButton
