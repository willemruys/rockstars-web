import React from "react"
import Layout from "../components/layout"
import SongCard from "../components/organisms/Cards/SongCard"

const Songs = ({ data }) => {
  return (
    <Layout>
      <div>
        <p>hello</p>
        {data.allSong.nodes.map(song => {
          return <SongCard song={song} />
        })}
      </div>
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
        name
      }
    }
  }
`

export default Songs
