# @wethegit/react-marquee

- [Getting set up](#getting-set-up)
  - [Install](#install)
  - [Import the CSS](#import-the-css)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Reduced motion](#reduced-motion)

## Getting set up

### Install

```bash
npm install @wethegit/react-marquee
```

### Import the CSS

Import this wherever it makes sense to, based on your project structure:

```bash
import "@wethegit/react-marquee/dist/main.css"
```

## Usage

```jsx
const YourComponent = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  return (
    <Marquee
      className={"marquee--modifier-class"}
      prefersReducedMotion={prefersReducedMotion}
      reducedMotionSpeed={20}
    >
      <img src="image-1.png" alt="" />
      <img src="image-2.png" alt="" />
      <img src="image-3.png" alt="" />
    </Marquee>
  )
}
```

## Props

| Prop                 | Type    | Default value | Description                                                                                                                                                            |
| -------------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className            | String  |               | Optional class added to the parent element.                                                                                                                            |
| speed                | Number  | 50            | Controls the speed of the marquee animation. If prefersReducedMotion is true, speed defaults to `reducedMotionSpeed`.                                                  |
| reducedMotionSpeed   | Number  | 20            | A customisable value used to set the speed of the component if `prefersReducedMotion` is true.                                                                         |
| prefersReducedMotion | Boolean | false         | Whether the user prefers reduced motion. If `true`, the component will default to a much slower speed, unless a custom speed is specified using: `reducedMotionSpeed`. |
| children             | Node    |               | The child elements rendered within the component. In the example above these are images, however they can be any type of element.                                      |

## Styling

This component uses the [BEM methodology](https://getbem.com/) for CSS classNames — the block here being `.marquee`.

## Reduced motion

Use the `prefersReducedMotion` prop to serve up a reduced motion experience for your users who have that option enabled on their systems. The boolean `prefersReducedMotion` prop can be derived via the browser's `matchMedia API`, if true the marquee defaults to a **much** slower speed, unless `reducedMotionSpeed` is passed. This workflow is demonstrated in the [Usage](#usage) section above.
