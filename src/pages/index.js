import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import { Container, Grid, makeStyles } from "@material-ui/core"
import SongsTables from "../components/organisms/Tables/SongsTables"
import PlaylistTable from "../components/organisms/Tables/PlaylistTable"

import { graphql } from "gatsby"

const axios = require("axios")
const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
})

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SongsTables songs={data.allSong.nodes} />
      <PlaylistTable />
    </Layout>
  )
}

export const query = graphql`
  query SongsQuery {
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
export default IndexPage
