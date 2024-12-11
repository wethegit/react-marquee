import { useState, useRef, useEffect, useCallback } from "react"

import { classnames } from "./utils/classnames"

import "./marquee.scss"

export interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If false, the marquee will not animate.
   * Default value is true.
   */
  playing?: boolean
  /**
   * If true, marquee will use reducedMotionSpeed instead of speed.
   * Default value is false.
   */
  prefersReducedMotion?: boolean
  /**
   * The speed of the marquee in pixels per second when prefersReducedMotion is true.
   * Default value is 20.
   */
  reducedMotionSpeed?: number
  /**
   * The speed of the marquee in pixels per second.
   * Default value is 50.
   */
  speed?: number
  /**
   * Whether to animate from left to right
   */
  reverse?: boolean
}

type Timer = ReturnType<typeof setTimeout>

export function Marquee({
  speed = 50,
  reducedMotionSpeed = 20,
  prefersReducedMotion = false,
  playing = true,
  reverse,
  children,
  className,
  ...props
}: MarqueeProps) {
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [neededAmount, setNeededAmount] = useState(1)

  const container = useRef<HTMLDivElement>(null)
  const marquee = useRef<HTMLDivElement>(null)
  const resizeTimer = useRef<Timer>()

  const updateState = useCallback(() => {
    const containerWidth = container.current?.clientWidth || 0
    const marqueeWidth = marquee.current?.clientWidth || 0

    // If prefersReducedMotion, replace speed with reducedMotionSpeed
    const speedAmount = prefersReducedMotion ? reducedMotionSpeed : speed

    // Divide the container width, by the marquee width and round it up
    // to give us the ammount of items needed to fill the container.
    let neededAmount = Math.ceil(containerWidth / marqueeWidth) * 2 - 1

    // check if needed ammount if less that one, if it is set to be just 1.
    if (neededAmount < 1 || isNaN(neededAmount)) {
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

  useEffect(() => {
    updateState()

    const handleResize = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      resizeTimer.current = setTimeout(updateState, 200)
    }

    window.addEventListener("resize", handleResize)

    const timer = resizeTimer.current
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
    }
  }, [updateState])

  return (
    <div
      {...props}
      ref={container}
      className={classnames([
        "marquee",
        marqueeWidth > 0 && "marquee--ready",
        reverse && "marquee--reverse",
        className,
      ])}
      style={
        {
          "--marquee-width": marqueeWidth,
          "--duration": duration + `s`,
          "--animation-state": playing ? "running" : "paused",
        } as React.CSSProperties
      }
    >
      <div ref={marquee} className="marquee__slide">
        {children}
      </div>

      <MarqueeItems neededAmount={neededAmount}>{children}</MarqueeItems>
    </div>
  )
}

interface MarqueeItemsProps {
  children?: React.ReactNode
  neededAmount: number
}

function MarqueeItems({ children, neededAmount }: MarqueeItemsProps) {
  return (
    <>
      {Array.from({ length: neededAmount }).map((_, index) => (
        <div className="marquee__slide" key={index}>
          {children}
        </div>
      ))}
    </>
  )
}
