import React from "react"
import AddIcon from "@material-ui/icons/Add"
import { IconButton } from "@material-ui/core"
import axios from "axios"
const AddButton = ({ song }) => {
  const addSongHandler = async song => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    axios
      .post(url, { ...song })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <IconButton onClick={() => addSongHandler(song)}>
      <AddIcon color="primary" />
    </IconButton>
  )
}

export default AddButton
