var minArrivalsToDiscard = function (arrivals, w, m) {
  const n = arrivals.length
  const cntMap = new Map()
  let cnt, a
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (i > w) {
      a = arrivals[i - w - 1]
      cntMap.set(a, Math.max(0, cntMap.get(a) - 1))
    }
    a = arrivals[i - 1]
    if (cntMap.has(a)) {
      cntMap.set(a, cntMap.get(a) + 1)
    } else {
      cntMap.set(a, 1)
    }
    if (cntMap.get(a) > m) {
      res++
      cntMap.set(a, cntMap.get(a) - 2)
    }
  }
  return res
}

console.log(minArrivalsToDiscard([1, 2, 1, 3, 1], 4, 2))
console.log(minArrivalsToDiscard([1, 2, 3, 3, 3, 4], 3, 2))
console.log(
  minArrivalsToDiscard(
    [7, 3, 9, 9, 7, 3, 5, 9, 7, 2, 6, 10, 9, 7, 9, 1, 3, 6, 2, 4, 6, 2, 6, 8, 4, 8, 2, 7, 5, 6],
    10,
    1
  )
)
