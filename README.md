## Rockstars application

This application has been built using Gatsby and a mock server running on local machine. Get the server here: https://github.com/willemruys/rockstars-server

## Running application on your local machine

Clone repo and install packages. Make sure server is up and running - see how to on rockstars-server repo.

Add an .env file containing the following two variables and its values:

```
GATSBY_ENVIRONMENT='local'
GATSBY_API_URL='http://localhost:3000/'
```

Use `yarn start` to start your environment.

## Server side rendering ussing createPages API

The page /artists is rendered on server side using the createPageApi, which has been configured in gatsby-node.js.

## graphql

### an migration has been made to use graphql entirely.

This applies to index page and songs page.

Using localhost:8000/\_\_\_graphql you can query songs. Example:

```
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
```

## How has the interface been built?

Features has been built using [Material-UI](https://material-ui.com/), a very usefull and popular React component framework.

## Current features

Currently it is possible to

- retrieve all available artists and their songs.
- Add a song to your playlist and remove one as well using your mock server.
- retrieve your songs in your playlist.

## WIP

### Current features

A long list, but some key things need to be worked on:

- Fix server side rendering bug

- work on global state (start has been made using [zustand](https://www.npmjs.com/package/zustand))

- refactor components (add, delete buttons, containers, grid)

### new features

- home page with preview of artists, genres and playlist songs

- artist detail page

- song detail page

- search input

- search on genre
