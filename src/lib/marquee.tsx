"use client"

import { useState, useRef, useEffect, useCallback } from "react"

import { classnames } from "./utils/classnames"

import styles from "./marquee.module.css"

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
   * Whether to animate from left to right, or bottom to top
   */
  reverse?: boolean
  /**
   * Whether to animate vertically, from top to bottom. Direct parent node should have display: flex & a defined height (100dvh, etc)
   */
  vertical?: boolean
}

type Timer = ReturnType<typeof setTimeout>

export function Marquee({
  speed = 50,
  reducedMotionSpeed = 20,
  prefersReducedMotion = false,
  playing = true,
  reverse,
  vertical,
  children,
  className,
  ...props
}: MarqueeProps) {
  const [marqueeSize, setmarqueeSize] = useState(0)
  const [duration, setDuration] = useState(0)
  const [neededAmount, setNeededAmount] = useState(1)

  const container = useRef<HTMLDivElement>(null)
  const marquee = useRef<HTMLDivElement>(null)
  const resizeTimer = useRef<Timer>()

  const updateState = useCallback(() => {
    const getRelevantDimensions = () => {
      if (vertical) {
        return {
          containerSize: container.current?.clientHeight || 0,
          marqueeSize: marquee.current?.clientHeight || 0,
        }
      }

      return {
        containerSize: container.current?.clientWidth || 0,
        marqueeSize: marquee.current?.clientWidth || 0,
      }
    }

    const { containerSize, marqueeSize } = getRelevantDimensions()

    // If prefersReducedMotion, replace speed with reducedMotionSpeed
    const speedAmount = prefersReducedMotion ? reducedMotionSpeed : speed

    // Divide the container width, by the marquee width and round it up
    // to give us the ammount of items needed to fill the container.
    const viewportSize = vertical ? window.innerHeight : window.innerWidth
    let neededAmount =
      Math.min(
        Math.ceil(containerSize / marqueeSize),
        Math.ceil(viewportSize / marqueeSize)
      ) *
        2 -
      1

    if (neededAmount < 1 || isNaN(neededAmount) || neededAmount === Infinity) {
      neededAmount = 1
    }

    // Set the needed ammount to state.
    setNeededAmount(neededAmount)

    // Set marquee width in state so we can use it for the`--marquee-width`
    // inline style.
    setmarqueeSize(marqueeSize)

    // Set duration speed, which is used below in the --duration inline style.
    if (marqueeSize < containerSize) {
      setDuration(containerSize / speedAmount)
    } else {
      setDuration(marqueeSize / speedAmount)
    }
  }, [prefersReducedMotion, reducedMotionSpeed, speed, vertical])

  useEffect(() => {
    const el = container.current

    if (!el) return

    updateState()

    const handleResize = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      resizeTimer.current = setTimeout(updateState, 200)
    }

    const ro = new ResizeObserver(handleResize)

    ro.observe(el)

    return () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      ro.disconnect()
    }
  }, [updateState])

  return (
    <div
      {...props}
      ref={container}
      className={classnames([
        styles.Marquee,
        vertical && styles["Marquee--vertical"],
        marqueeSize > 0 && styles["Marquee--ready"],
        reverse && styles["Marquee--reverse"],
        className,
      ])}
      style={
        {
          "--marquee-width": marqueeSize,
          "--duration": duration + `s`,
          "--animation-state": playing ? "running" : "paused",
        } as React.CSSProperties
      }
    >
      <div ref={marquee} className={styles.Marquee__Slide}>
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
        <div className={styles.Marquee__Slide} key={index}>
          {children}
        </div>
      ))}
    </>
  )
}
