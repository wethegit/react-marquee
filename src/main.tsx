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

      <h1>Reversed</h1>
      <Marquee speed={100} reducedMotionSpeed={20} reverse>
        <Slide />
      </Marquee>

      <h1>Paused</h1>
      <Marquee playing={false}>
        <Slide />
      </Marquee>

      <h1>Vertical</h1>
      <div style={{ display: "flex", height: "100vh", overflow: "clip" }}>
        <Marquee vertical speed={100} reducedMotionSpeed={20}>
          <Slide />
        </Marquee>
      </div>

      <h1>Vertical Reverse</h1>
      <div style={{ display: "flex", height: "100vh", overflow: "clip" }}>
        <Marquee vertical speed={100} reducedMotionSpeed={20} reverse>
          <Slide />
        </Marquee>
      </div>
    </>
  )
}

function Slide() {
  return (
    <>
      <img src="https://placehold.co/200x400/000/FFF" alt="" width="200" height="400" />
      <img src="https://placehold.co/500/EEE/000" alt="" width="500" height="500" />
      <img src="https://placehold.co/640x360/888/FFF" alt="" width="640" height="360" />
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
