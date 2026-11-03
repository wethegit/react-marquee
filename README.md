# @wethegit/react-marquee

- [Getting set up](#getting-set-up)
  - [Install](#install)
  - [Import the CSS](#import-the-css)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Reduced motion](#reduced-motion)
- [Contributing](#contributing)
  - [Writing changesets](#writing-changesets)

## Getting set up

### Install

```bash
npm install @wethegit/react-marquee
```

### Import the CSS

Import this wherever it makes sense to, based on your project structure:

```bash
import "@wethegit/react-marquee/style.css"
```

## Usage

```jsx
const YourComponent = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  return (
    <Marquee
      className="marquee--modifier-class"
      prefersReducedMotion={prefersReducedMotion}
      reducedMotionSpeed={20}
    >
      {/* Good practice to add size of image to avoid stutter */}
      <img src="image-1.png" alt="" width="500" height="500" />
      <img src="image-2.png" alt="" width="500" height="500" />
      <img src="image-3.png" alt="" width="500" height="500" />
    </Marquee>
  )
}
```

## Props

| Prop                 | Type    | Default value | Description                                                                                                                                                            |
| -------------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| speed                | Number  | 50            | Controls the speed of the marquee animation. If prefersReducedMotion is true, speed defaults to `reducedMotionSpeed`.                                                  |
| reducedMotionSpeed   | Number  | 20            | A customisable value used to set the speed of the component if `prefersReducedMotion` is true.                                                                         |
| prefersReducedMotion | Boolean | false         | Whether the user prefers reduced motion. If `true`, the component will default to a much slower speed, unless a custom speed is specified using: `reducedMotionSpeed`. |
| playing              | Boolean | true          | Whether the marquee animation is playing or paused.                                                                                                                    |
| reverse              | Boolean | false         | Whether the marquee should animate from left to right.                                                                                                                 |
| className            | String  |               | Optional class added to the parent element.                                                                                                                            |
| children             | Node    |               | The child elements rendered within the component. In the example above these are images, however they can be any type of element.                                      |

## Styling

This component uses the [BEM methodology](https://getbem.com/) for CSS classNames — the block here being `.marquee`.

## Reduced motion

Use the `prefersReducedMotion` prop to serve up a reduced motion experience for your users who have that option enabled on their systems. The boolean `prefersReducedMotion` prop can be derived via the browser's `matchMedia API`, if true the marquee defaults to a **much** slower speed, unless `reducedMotionSpeed` is passed. This workflow is demonstrated in the [Usage](#usage) section above.

## Contributing

### Writing changesets

This package uses [Changesets](https://github.com/changesets/changesets) to manage versions, changelogs and publishing. Any PR that changes the published package (a bug fix, a new feature or a breaking change) should include a changeset.

To add one, run this from the root of the repo:

```bash
npm run changeset
```

The CLI will ask you to:

1. **Pick a bump type**, following [semver](https://semver.org/):
   - `patch`: bug fixes and internal changes that don't affect the API
   - `minor`: new, backwards-compatible features (for example, a new prop)
   - `major`: breaking changes (for example, removing or renaming a prop, or changing a default)
2. **Write a summary.** This text goes straight into `CHANGELOG.md`, so write it for people who use the package: say what changed and, for breaking changes, how to migrate.

This creates a markdown file in `.changeset/` with a random name, like this:

```md
---
"@wethegit/react-marquee": patch
---

Fixed the marquee width calculation when children load after the first render.
```

Commit this file with the rest of your changes. You can edit it by hand before merging, and a single PR can include more than one changeset.

Changes that don't affect the published package, like docs, CI or tooling updates, don't need a changeset.

#### What happens on merge

When a PR with a changeset is merged into `main`, the release workflow opens (or updates) a **Version Packages** PR. That PR bumps the version in `package.json` and updates `CHANGELOG.md`. Merging the Version Packages PR publishes the new version to npm and creates a GitHub release.
