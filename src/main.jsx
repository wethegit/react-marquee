import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { Marquee } from "./lib"

function App() {
  return (
    <>
      <h1>Default</h1>
      <Marquee speed={100} reducedMotionSpeed={20}>
        <Slide />
      </Marquee>

      <h1>Paused</h1>
      <Marquee playing={false}>
        <Slide />
      </Marquee>
    </>
  )
}

function Slide() {
  return (
    <>
      <img
        src="https://source.unsplash.com/random/200x400"
        alt=""
        width="200"
        height="400"
      />
      <img
        src="https://source.unsplash.com/random/500x500"
        alt=""
        width="500"
        height="500"
      />
      <img
        src="https://source.unsplash.com/random/640x360"
        alt=""
        width="640"
        height="360"
      />
    </>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
