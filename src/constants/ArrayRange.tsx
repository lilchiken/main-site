export default function ArrayRange (start: number, stop: number, step: number) {
  return Array.from(
  { length: (stop - start) / step + 1 },
  (value, index) => start + index * step)
}