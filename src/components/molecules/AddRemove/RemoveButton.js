import { IconButton } from "@material-ui/core"
import RemoveIcon from "@material-ui/icons/Remove"
import React from "react"
import axios from "axios"
import useStore from "../../../hooks/playlist/usePlaylist"
import useSongInPlaylist from "../../../hooks/useSongInPlaylist"
const RemoveButton = ({ song }) => {
  const getSongsInPlaylist = async () => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    const res = await axios.get(url)

    console.log(res)
    useStore.setState({ songsInPlaylist: res.data })
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

    getSongsInPlaylist()
  }

  // const isInPlaylist = useSongInPlaylist(song.id) // returns true when song is in playlist

  return (
    <IconButton
      // disabled={!isInPlaylist}
      onClick={() => removeSongHandler(song)}
    >
      <RemoveIcon />
    </IconButton>
  )
}

export default RemoveButton
