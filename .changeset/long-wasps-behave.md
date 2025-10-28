---
"@wethegit/react-marquee": major
---

Fixed width calculation issues for dynamic and flex-based content.

Implemented ResizeObserver for responsive dimension recalculations.

Removed legacy event listeners.

Added fallback to ensure `neededAmount` defaults to `1` when calculations yield Infinity, preventing edge-case crashes.

