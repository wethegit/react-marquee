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
      <img src="https://unsplash.it/200/400?random" alt="" width="200" height="400" />
      <img src="https://unsplash.it/500/500?random" alt="" width="500" height="500" />
      <img src="https://unsplash.it/640/360?random" alt="" width="640" height="360" />
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
