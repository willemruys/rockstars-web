const axios = require("axios")

const getSongData = async () => {
  let data = []

  if (process.env.GATSBY_ENVIRONMENT === "local") {
    const url = process.env.GATSBY_API_URL + "songs"
    await axios
      .get(url)
      .then(res => (data = res.data))
      .catch(err => console.error(err))
  }

  return data
}

const getArtistData = async () => {
  let data = []

  if (process.env.GATSBY_ENVIRONMENT === "local") {
    const url = process.env.GATSBY_API_URL + "artists"
    await axios
      .get(url)
      .then(res => (data = res.data))
      .catch(err => console.error(err))
  }

  return data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const songs = await getSongData()

  // push all songs
  createPage({
    path: "songs/depreciated",
    component: require.resolve("./src/components/templates/Songs.js"),
    context: { songs },
  })

  // create a page for each song:
  songs.forEach(song => {
    createPage({
      path: `songs/depreciated/${song.shortname}`,
      parent: `__SOURCE__`,
      component: require.resolve("./src/components/templates/SongPage.js"),
      context: { song },
    })
  })

  const artists = await getArtistData()

  // create a page for all artists
  createPage({
    path: "artists",
    component: require.resolve("./src/components/templates/Artists.js"),
    context: { artists },
  })

  // create a page for each artist
  artists.forEach(artist => {
    // match artist.name with songs.artist
    // TO-DO for backend: add songs.artistId
    artist.songs = []
    songs.forEach(song => {
      if (song.artist === artist.name) {
        artist.songs.push({
          id: song.id,
          name: song.name,
          year: song.year,
          shortname: song.shortname,
          genre: song.genre,
          album: song.album,
        })
      }
    })

    createPage({
      path: `artists/${artist.id}`,
      component: require.resolve("./src/components/templates/ArtistPage.js"),
      context: { artist },
    })
  })
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions
  const artistData = await getArtistData()
  const songData = await getSongData()

  // loop through data and create Gatsby nodes
  artistData.forEach(artist => {
    createNode({
      ...artist,
      id: createNodeId(`artist-${artist.id}`),
      parent: null,
      children: [],
      internal: {
        type: "artist",
        content: JSON.stringify(artist),
        contentDigest: createContentDigest(artist),
      },
    })
  })

  songData.forEach(song => {
    createNode({
      ...song,
      id: createNodeId(`song-${song.id}`),
      parent: null,
      children: [],
      internal: {
        type: "song",
        content: JSON.stringify(song),
        contentDigest: createContentDigest(song),
      },
    })
  })

  // all songs
  createNode({
    songData,
    parent: null,
    children: [],
    internal: {
      type: "allSongs",
      content: JSON.stringify(songData),
      contentDigest: createContentDigest(songData),
    },
  })

  // all artists
  createNode({
    artistData,
    parent: null,
    children: [],
    internal: {
      type: "allArtists",
      content: JSON.stringify(artistData),
      contentDigest: createContentDigest(artistData),
    },
  })

  return
}
