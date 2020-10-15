import React from "react"

export default ({ pageContext: { artist } }) => {
  console.log(artist)
  return <p>hello</p>
}
