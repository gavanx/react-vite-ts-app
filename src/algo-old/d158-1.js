var maxSumDistinctTriplet = function (x, y) {
  let i,
    j,
    k,
    ans = -1,
    l = x.length
  for (j = 1; j < l - 1; j++) {
    for (i = j - 1; i >= 0; i--) {
      if (x[i] !== x[j]) {
        for (k = j + 1; k < l; k++) {
          if (x[j] !== x[k] && x[i] !== x[k]) {
            ans = Math.max(ans, y[i] + y[j] + y[k])
          }
        }
      }
    }
  }
  return ans
}

console.log(maxSumDistinctTriplet([1, 2, 1, 3, 2], [5, 3, 4, 6, 2]))
console.log(maxSumDistinctTriplet([1, 2, 1, 2], [4, 5, 6, 7]))
