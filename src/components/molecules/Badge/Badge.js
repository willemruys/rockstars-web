import React, { useEffect, useState } from "react"
import axios from "axios"
import { Badge } from "@material-ui/core"
import AlbumIcon from "@material-ui/icons/Album"
import { Link } from "gatsby"
import useStore from "../../../hooks/playlist/usePlaylist"

export const BadgeComponent = () => {
  const state = useStore()

  return (
    <Badge badgeContent={state.songsInPlaylist.length} color="secondary">
      <Link to="/playlist">
        <AlbumIcon color="primary" />
      </Link>
    </Badge>
  )
}
