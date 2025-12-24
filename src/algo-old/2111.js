var kIncreasing = function (arr, k) {
  const upperBound = function (g, target) {
    let left = -1,
      right = g.length
    while (left + 1 < right) {
      let mid = (left + right) >>> 1
      if (g[mid] > target) {
        right = mid
      } else {
        left = mid
      }
    }
    return right
  }

  const n = arr.length
  let ans = 0
  for (let i = 0; i < k; i++) {
    let g = [],
      x
    for (let j = i; j < n; j += k) {
      x = arr[j]
      let j2 = upperBound(g, x)
      if (j2 === g.length) {
        g.push(x)
      } else {
        g[j2] = x
      }
    }
    ans += g.length
  }
  return n - ans
}

console.log(kIncreasing([5, 4, 3, 2, 1], 1))
console.log(kIncreasing([4, 1, 5, 2, 6, 2], 2))
console.log(kIncreasing([4, 1, 5, 2, 6, 2], 3))
