/* eslint-disable react/prop-types */
import React from "react"
import ReactDOM from "react-dom"

import { Marquee } from "./lib"

function App() {
  return (
    <Marquee reducedMotionSpeed={20}>
      <img
        src="https://images.unsplash.com/photo-1680212703757-2565f02a653e?auto=format&fit=crop&w=1000&height=500&q=80"
        alt=""
        width="1000"
        height="500"
      />
      <img
        src="https://images.unsplash.com/photo-1663320858344-22507e90ab30?auto=format&fit=crop&w=1000&height=500&q=80"
        alt=""
        width="1000"
        height="500"
      />
      <img
        src="https://images.unsplash.com/photo-1656200088379-5b725a1bd4fe?auto=format&fit=crop&w=1000&height=500&q=80"
        alt=""
        width="1000"
        height="500"
      />
    </Marquee>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
