var specialTriplets = function (nums) {
  let left = []
  let right = []
  let max = 0
  for (const n of nums) {
    right[n] = right[n] > 0 ? right[n] + 1 : 1
    max = Math.max(max, n)
  }
  let ans = 0,
    t
  for (const n of nums) {
    right[n]--
    t = 2 * n
    if (t <= max && right[t] && left[t]) {
      ans += right[t] * left[t]
    }
    left[n] = left[n] > 0 ? left[n] + 1 : 1
  }
  return ans % (1e9 + 7)
}

console.log(specialTriplets([6, 3, 6]))
console.log(specialTriplets([0, 1, 0, 0]))
console.log(specialTriplets([8, 4, 2, 8, 4]))
