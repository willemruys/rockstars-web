import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import { Container, Grid, makeStyles } from "@material-ui/core"
const axios = require("axios")

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
})

const IndexPage = () => {
  const [previewArtists, setPreviewArtists] = useState([])
  const classes = useStyles()

  const getArtists = async () => {
    const url = process.env.API_URL + "artists"
    await axios
      .get(url)
      .then(res => {
        setPreviewArtists(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getArtists()
  }, [])

  console.log(previewArtists)

  return (
    <Layout>
      <Container className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <h1>Your artists</h1>
          </Grid>
          {/* {previewArtists.map(artist => {
            return (
              <Grid item xs={6}>
                <ArtistCard artist={artist} />
              </Grid>
            )
          })} */}
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
