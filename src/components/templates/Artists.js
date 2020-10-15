import React, { useState, useEffect } from "react"
import Layout from "../layout"
import {
  Container,
  Grid,
  Input,
  makeStyles,
  FormControl,
} from "@material-ui/core"
import ArtistCard from "../organisms/Cards/ArtistCard"
const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
})

export default ({ pageContext: { artists } }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Container className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <h1>A selection of artists</h1>
          </Grid>
          <Grid item xs={12}>
            {/* <input onChange={e => setFilter(e.target.value)}></input> */}
          </Grid>
          {artists.map(artist => {
            return (
              <Grid item xs={12}>
                <ArtistCard artist={artist} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}
