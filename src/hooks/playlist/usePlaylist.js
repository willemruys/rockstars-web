import create from "zustand"

export const useStore = create(set => ({
  songsInPlaylist: [],
  fetch: async url => {
    const response = await fetch(url)
    set({ songsInPlaylist: await response.json() })
  },
}))
