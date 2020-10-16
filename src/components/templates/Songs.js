import { Grid } from "@material-ui/core"
import React from "react"
import Layout from "../layout"
import SongCard from "../organisms/Cards/SongCard"

export default ({ pageContext: { songs } }) => {
  console.log(songs)
  return (
    <Layout>
      <h2>All songs</h2>
      <Grid container spacing={3}>
        {songs.map(song => {
          return (
            <Grid item xs={12}>
              <SongCard song={song} />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}
