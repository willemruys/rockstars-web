import React, { useEffect, useState } from "react"
import axios from "axios"
import { Badge, IconButton, Typography } from "@material-ui/core"
import AlbumIcon from "@material-ui/icons/Album"
import { Link } from "gatsby"
import { useStore } from "../../../hooks/playlist/usePlaylist"

export const BadgeComponent = () => {
  const [songsInPlayList, setSongsInPlaylist] = useState(0)

  const getSongsInPlaylist = async () => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    await axios.get(url).then(res => setSongsInPlaylist(res.data.length))
  }

  useEffect(() => {
    getSongsInPlaylist()
  }, [])

  return (
    <Badge badgeContent={songsInPlayList} color="secondary">
      <Link to="/playlist">
        <AlbumIcon />
      </Link>
    </Badge>
  )
}
