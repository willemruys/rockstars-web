import { useEffect, useState } from "react"
import useStore from "./playlist/usePlaylist"

const useSongInPlaylist = id => {
  const [isInPlayList, setIsInPlaylist] = useState(false)
  const state = useStore.getState()

  state.songsInPlaylist.forEach(songInPlaylist => {
    if (id === songInPlaylist.id) {
      setIsInPlaylist(true)
    }
  })

  return isInPlayList
}

export default useSongInPlaylist
