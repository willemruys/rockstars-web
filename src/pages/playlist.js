import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import axios from "axios"
import { Grid } from "@material-ui/core"
import SongCard from "../components/organisms/Cards/SongCard"

const Playlist = () => {
  const [songsInPlayList, setSongsInPlaylist] = useState([])

  const getSongsInPlaylist = async () => {
    const url = process.env.GATSBY_API_URL + "personal-playlist"
    await axios.get(url).then(res => setSongsInPlaylist(res.data))
    return
  }

  useEffect(() => {
    getSongsInPlaylist()
  }, [])

  return (
    <Layout>
      <Grid container spacing={3} justify="center">
        {songsInPlayList.map(song => {
          return (
            <>
              <Grid item xs={12}>
                <SongCard song={song} />
              </Grid>
            </>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Playlist
