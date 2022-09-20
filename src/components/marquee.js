import React, { useState, useRef, useEffect } from "react"

import styles from "./marquee.module.scss"
import "../styles/globals.scss"

const Marquee = ({ speed, children }) => {
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [neededAmount, setNeededAmount] = useState(1)

  const container = useRef()
  const marquee = useRef()
  const resizeTimer = useRef()

  const getNumber = () => {
    const containerWidth = container.current.clientWidth
    const marqueeWidth = marquee.current.clientWidth

    // Divide the container width, by the marquee width and round it up
    // to give us the ammount of items needed to fill the container.
    let neededAmount = Math.ceil(containerWidth / marqueeWidth) * 2 - 1

    // check if needed ammount if less that one, if it is set to be just 1.
    if (neededAmount < 1) {
      neededAmount = 1
    }

    // Set the needed ammount to state.
    setNeededAmount(neededAmount)

    // Set marquee width in state so we can use it for the`--marquee-width`
    // inline style.
    setMarqueeWidth(marqueeWidth)

    // Set duration speed, which is used below in the --duration inline style.
    if (marqueeWidth < containerWidth) {
      setDuration(containerWidth / speed)
    } else {
      setDuration(marqueeWidth / speed)
    }
  }

  const getMarquees = () => {
    // For each marquee needed to fill the extra space, we pushed the blow markup
    // to an empty array and run the getMarquees function below to render them.
    let marquees = []

    for (let index = 0; index < neededAmount; index++) {
      marquees.push(
        <div className={styles.marquee} key={index}>
          {children}
        </div>
      )
    }

    return marquees
  }

  const handleResize = () => {
    if (resizeTimer.current) clearTimeout(resizeTimer.current)
    resizeTimer.current = setTimeout(() => {
      getNumber()
    }, 200)
  }

  useEffect(() => {
    getNumber();
    
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      ref={container}
      className={styles.marqueeContainer}
      style={{
        "--marquee-width": marqueeWidth,
        "--duration": duration + `s`,
      }}
    >
      <div ref={marquee} className={styles.marquee}>
        {children}
      </div>

      {getMarquees()}
    </div>
  )
}

export default Marquee
