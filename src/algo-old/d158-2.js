var maxSumDistinctTriplet = function (x, y) {
  const m = new Map()
  for (let i = 0; i < x.length; i++) {
    if (m.has(x[i])) {
      m.set(x[i], Math.max(y[i], m.get(x[i])))
    } else {
      m.set(x[i], y[i])
    }
  }
  const a = [...m.values()].sort((a, b) => b - a)
  return a.length >= 3 ? a[0] + a[1] + a[2] : -1
}

console.log(maxSumDistinctTriplet([1, 2, 1, 3, 2], [5, 3, 4, 6, 2]))
console.log(maxSumDistinctTriplet([1, 2, 1, 2], [4, 5, 6, 7]))
console.log(maxSumDistinctTriplet([19, 15, 7, 13], [13, 11, 13, 11]))
console.log(maxSumDistinctTriplet([20, 9, 15, 17], [16, 7, 3, 15]))
