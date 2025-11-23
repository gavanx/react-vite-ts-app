var largestNumber = function (cost, target) {
  const dp = new Array(target + 1).fill(-Infinity)
  dp[0] = 0
  for (const c of cost) {
    for (let i = c; i <= target; i++) {
      dp[i] = Math.max(dp[i], dp[i - c] + 1)
    }
  }
  if (dp[target] < 0) {
    return '0'
  }
  let res = ''
  let c
  let j = target
  for (let i = 9; i >= 1; i--) {
    c = cost[i - 1]
    while (j >= c && dp[j] === dp[j - c] + 1) {
      res += i.toString()
      j -= c
    }
  }
  return res
}

console.log(-Infinity)

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9))
console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 12))
console.log(largestNumber([2, 4, 6, 2, 4, 6, 4, 4, 4], 5))
console.log(largestNumber([6, 10, 15, 40, 40, 40, 40, 40, 40], 47))
