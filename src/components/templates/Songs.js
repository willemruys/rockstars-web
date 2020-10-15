import React from "react"

export default ({ pageContext: { songs } }) => {
  console.log(songs)
  return (
    <>
      {songs.map(song => {
        return (
          <>
            <p>{song.name}</p>
            <p>{song.shortname}</p>
          </>
        )
      })}
    </>
  )
}
