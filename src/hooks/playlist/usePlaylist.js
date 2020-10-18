import create from "zustand"
import axios from "axios"

const useStore = create(set => ({
  songsInPlaylist: [],
  setSongsInPlaylist: songs => set({ songsInPlaylist: songs }),
  fetch: async url => {
    const response = await fetch(url)
    set({ songsInPlaylist: await response.json() })
  },
}))

export default useStore
