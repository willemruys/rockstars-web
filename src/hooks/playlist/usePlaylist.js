import React, { useEffect, useState } from "react"
import create from "zustand"
import axios from "axios"

export const useStore = create(set => ({
  songsInPlaylist: [],
  fetch: async url => {
    const response = await fetch(url)
    set({ songsInPlaylist: await response.json() })
  },
}))
