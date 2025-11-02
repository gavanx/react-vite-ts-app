var deleteAndEarn = function (nums) {
  const n = nums.length
  nums = nums.sort((a, b) => a - b)
  const a = []
  for (let i = 0; i < n; i++) {
    if (a.length === 0 || a[a.length - 1][0] !== nums[i]) {
      a.push([nums[i], 1])
    } else {
      a[a.length - 1][1]++
    }
  }
  const n2 = a.length
  const dp = new Array(n2).fill(0).map(() => [0, 0])
  dp[0][0] = 0
  dp[0][1] = a[0][0] * a[0][1]
  let canChoose
  for (let i = 1; i < n2; i++) {
    const [v, c] = a[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    canChoose = v - a[i - 1][0] > 1
    dp[i][1] = v * c + (canChoose ? dp[i][0] : dp[i - 1][0])
  }
  return Math.max(dp[n2 - 1][0], dp[n2 - 1][1])
}

console.log(deleteAndEarn([3, 4, 2]) === 6)
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]) === 9)
