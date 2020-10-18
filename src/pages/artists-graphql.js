import React from "react"
import { Grid, makeStyles, Container } from "@material-ui/core"
import Layout from "../components/layout"
import ArtistCard from "../components/organisms/Cards/ArtistCard"
const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
})
const Artists = ({ data }) => {
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
          {data.allArtist.nodes.map(artist => {
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

export const query = graphql`
  query ArtistsQuery {
    allArtist {
      nodes {
        id
        name
      }
    }
  }
`

export default Artists
