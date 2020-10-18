import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import AddButton from "../../molecules/AddRemove/AddButton"
import RemoveButton from "../../molecules/AddRemove/RemoveButton"
import axios from "axios"
const useStyle = makeStyles(() => ({
  container: {
    textAlign: "left",
  },
}))
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

  const classes = useStyle()

  return (
    <Card>
      <CardContent className={classes.container}>
        <h4>{name}</h4>
        <p>{album}</p>
        <p>{genre}</p>
        <AddButton song={song} />
        <RemoveButton song={song} />
      </CardContent>
      {/* <CardMedia image={imageUrl}></CardMedia> */}
    </Card>
  )
}

export default SongCard
