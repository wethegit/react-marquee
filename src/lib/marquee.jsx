import PropTypes from "prop-types"
import { useState, useMemo, useRef, useEffect, useCallback } from "react"

import { classnames } from "./utils/classnames"

import "./marquee.scss"

/**
 * Infinite scrolling marquee component.
 *
 * @param {object} props
 * @param {number=50} props.speed - The speed of the marquee in pixels per second.
 * @param {number=20} props.reducedMotionSpeed - The speed of the marquee in pixels per second when prefersReducedMotion is true.
 * @param {boolean=false} props.prefersReducedMotion - If true, marquee will use reducedMotionSpeed instead of speed.
 * @param {boolean=true} props.playing - If false, the marquee will not animate.
 * @param {string} props.className - Additional classnames to add to the marquee.
 * @param {React.Component} props.children - The content to be rendered inside the marquee. Will be wrapped in a div with the class of `marquee__slide`.
 *
 * @returns {React.Component}
 */
export function Marquee({
  speed = 50,
  reducedMotionSpeed = 20,
  prefersReducedMotion = false,
  playing = true,
  children,
  className,
  ...props
}) {
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [neededAmount, setNeededAmount] = useState(1)

  const container = useRef()
  const marquee = useRef()
  const resizeTimer = useRef()

  const setState = useCallback(() => {
    const containerWidth = container.current.clientWidth
    const marqueeWidth = marquee.current.clientWidth

    // If prefersReducedMotion, replace speed with reducedMotionSpeed
    const speedAmount = prefersReducedMotion ? reducedMotionSpeed : speed

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
      setDuration(containerWidth / speedAmount)
    } else {
      setDuration(marqueeWidth / speedAmount)
    }
  }, [prefersReducedMotion, reducedMotionSpeed, speed])

  const marquees = useMemo(() => {
    // For each marquee needed to fill the extra space, we pushed the below markup
    // to an empty array and run the getMarquees function below to render them.
    let marquees = []

    for (let index = 0; index < neededAmount; index++) {
      marquees.push(
        <div className="marquee__slide" key={index}>
          {children}
        </div>
      )
    }

    return marquees
  }, [children, neededAmount])

  useEffect(() => {
    setState()

    const { current } = container

    const handleResize = () => {
      if (current) clearTimeout(current)

      resizeTimer.current = setTimeout(() => {
        setState()
      }, 200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(current)
      window.removeEventListener("resize", handleResize)
    }
  }, [setState])

  return (
    <div
      {...props}
      ref={container}
      className={classnames(["marquee", className])}
      style={{
        "--marquee-width": marqueeWidth,
        "--duration": duration + `s`,
        "--animation-state": playing ? "running" : "paused",
      }}
    >
      <div ref={marquee} className="marquee__slide">
        {children}
      </div>

      {marquees}
    </div>
  )
}

Marquee.propTypes = {
  prefersReducedMotion: PropTypes.bool,
  playing: PropTypes.bool,
  className: PropTypes.string,
  speed: PropTypes.number,
  reducedMotionSpeed: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}
