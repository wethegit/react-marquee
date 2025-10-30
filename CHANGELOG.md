# @wethegit/react-marquee

## 3.0.0

### Major Changes

- [#164](https://github.com/wethegit/react-marquee/pull/164) [`52c1da9`](https://github.com/wethegit/react-marquee/commit/52c1da95fdef818232d3f1d23160606c835da5e6) Thanks [@pravton](https://github.com/pravton)! - Fixed width calculation issues for dynamic and flex-based content.

  Implemented ResizeObserver for responsive dimension recalculations.

  Removed legacy event listeners.

  Added fallback to ensure `neededAmount` defaults to `1` when calculations yield Infinity, preventing edge-case crashes.

## 2.2.0

### Minor Changes

- [#141](https://github.com/wethegit/react-marquee/pull/141) [`a61ab67`](https://github.com/wethegit/react-marquee/commit/a61ab6714527dd116080344e57c1d68e491e7343) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - Updates React version support

## 2.1.3

### Patch Changes

- [#129](https://github.com/wethegit/react-marquee/pull/129) [`4d4a5e3`](https://github.com/wethegit/react-marquee/commit/4d4a5e30af8c02193008e6b80cb7af8fce623d14) Add "reverse" option

## 2.1.1

### Patch Changes

- [#95](https://github.com/wethegit/react-marquee/pull/95) [`b8ba89f`](https://github.com/wethegit/react-marquee/commit/b8ba89fa877451b30375377e3c93100660231da3) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - fix: ensures timer variable is properly scoped

## 2.1.0

### Minor Changes

- [#72](https://github.com/wethegit/react-marquee/pull/72) [`8056d5e`](https://github.com/wethegit/react-marquee/commit/8056d5e0a8977e8525ea25e8aa5ce29c6d2351aa) Thanks [@wonderfulfrog](https://github.com/wonderfulfrog)! - feat: convert project to typescript and add types
