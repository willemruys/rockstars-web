import { Grid, makeStyles, Container } from "@material-ui/core"
import React from "react"
import Layout from "../components/layout"
import SongCard from "../components/organisms/Cards/SongCard"
import { graphql } from "gatsby"

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
})
const Songs = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>All songs</h2>
          </Grid>
          {data.allSong.nodes.map(song => {
            return (
              <Grid item xs={12}>
                <SongCard song={song} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AllSongsPageQuery {
    allSong {
      nodes {
        artist
        bpm
        album
        genre
        duration
        id
      }
    }
  }
`

export default Songs
