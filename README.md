## Rockstars application

This application has been built using Gatsby and a mock server running on local machine. Get the server here: [https://github.com/willemruys/rockstars-server]

## Running application on your local machine

Clone repo and install packages. Make sure server is up and running - see how to on rockstars-server repo. Use `yarn start` to start the website.

## Server side rendering ussing createPages API

The page /artists is rendered on server side using the createPageApi, which has been configured in gatsby-node.js.

## How has the interface been built?

Features has been built using [Material-UI] (https://material-ui.com/), a very usefull and popular React component framework.

## Current features

Currently it is possible to retrieve all available artists and their songs. It is possible to add a song to your playlist and remove one as well using your mock server.

It is also possible to retrieve your songs in your playlist.
