import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import axios from "axios"
import { Container, Grid, makeStyles, Button } from "@material-ui/core"
import SongCard from "../components/organisms/Cards/SongCard"
import useStore from "../hooks/playlist/usePlaylist"

const useStyle = makeStyles(() => ({
  container: {
    paddingTop: 20,
    textAlign: "center",
  },
}))
const Playlist = () => {
  const state = useStore()
  const classes = useStyle()
  const songsInPlaylist = state.songsInPlaylist
  return (
    <Layout>
      <Container className={classes.container}>
        <Grid container spacing={3} justify="center">
          {songsInPlaylist.length === 0 && (
            <Grid item xs={12}>
              <h3>There are no songs in your playlist!</h3>
              <Button href="/" type="primary">
                Go add songs!
              </Button>
            </Grid>
          )}
          {songsInPlaylist &&
            songsInPlaylist.map(song => {
              return (
                <>
                  <Grid item xs={12}>
                    <SongCard song={song} />
                  </Grid>
                </>
              )
            })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Playlist
