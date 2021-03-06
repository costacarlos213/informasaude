export function calcPagination(total: number): number {
  let index = 0
  let equal = false

  const result = total / 6
  const roundedResult = Math.trunc(total / 6)

  result === roundedResult && (equal = true)
  result === 0 && (equal = false)

  if (equal) {
    index = total / 6
  } else {
    index = Math.trunc(total / 6) + 1
  }

  return index
}
