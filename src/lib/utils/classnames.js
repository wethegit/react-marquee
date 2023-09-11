export function classnames(classes) {
  if (!classes) return null
  if (typeof classes === "string") return classes.trim()
  if (!Array.isArray(classes)) return null

  return classes
    .flat()
    .filter((c) => typeof c === "string")
    .join(" ")
}
