import React from "react"

export default ({ pageContext: { song } }) => {
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
  return <>{name}</>
}
