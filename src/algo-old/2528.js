var maxPower = function (stations, r, k) {
  const n = stations.length
  let sum = [0]
  for (let x of stations) {
    sum.push(sum[sum.length - 1] + x)
  }
  const power = []
  let min = Infinity
  for (let i = 0; i < n; i++) {
    power.push(sum[Math.min(i + r + 1, n)] - sum[Math.max(0, i - r)])
    min = Math.min(min, power[i])
  }
  let left = min + Math.floor(k / n)
  let right = min + k + 1
  const check = (low) => {
    const diff = Array.from({ length: n + 1 }, () => 0)
    let built = 0
    let sumDiff = 0
    let b
    for (let i = 0; i < n; i++) {
      sumDiff += diff[i]
      b = low - (power[i] + sumDiff)
      if (b <= 0) {
        continue
      }
      built += b
      if (built > k) {
        return false
      }
      sumDiff += b
      diff[Math.min(i + 2 * r + 1, n)] -= b
    }
    return true
  }
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      left = mid
    } else {
      right = mid
    }
  }
  return left
}

console.log(maxPower([1, 2, 4, 5, 0], 1, 2))
console.log(maxPower([4, 4, 4, 4], 0, 3))
