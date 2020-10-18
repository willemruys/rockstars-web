import React from "react"
import AddIcon from "@material-ui/icons/Add"
import { IconButton } from "@material-ui/core"
import axios from "axios"
import useStore from "../../../hooks/playlist/usePlaylist"
import useSongInPlaylist from "../../../hooks/useSongInPlaylist"

const AddButton = ({ song }) => {
  const getSongsInPlaylist = async () => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    const res = await axios.get(url)

    console.log(res)
    useStore.setState({ songsInPlaylist: res.data })
  }
  const addSongHandler = async song => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    await axios
      .post(url, { ...song })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    getSongsInPlaylist()
  }

  // const isInPlaylist = useSongInPlaylist(song.id) // returns true when song is in playlist
  return (
    <IconButton
      // disabled={isInPlaylist}
      onClick={() => addSongHandler(song)}
    >
      <AddIcon color="primary" />
    </IconButton>
  )
}

export default AddButton
