import { Card, CardContent } from "@material-ui/core"
import React from "react"

const SongCard = ({ song }) => {
  const {
    id,
    name,
    year,
    artist,
    shortname,
    bpm,
    duration,
    genre,
    spotifyId,
    album,
  } = song

  return (
    <Card>
      <CardContent>
        <h4>{name}</h4>
        <p>{album}</p>
        <p>{genre}</p>
      </CardContent>
    </Card>
  )
}

export default SongCard
