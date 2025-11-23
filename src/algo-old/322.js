var coinChange = function (coins, amount) {
  const n = coins.length
  let ans = Infinity
  const dfs = (i, c, a) => {
    if (a === 0) {
      ans = Math.min(ans, c)
    }
    if (i >= n || a < 0 || c >= ans) return

    dfs(i, c + 1, a - coins[i])
    dfs(i + 1, c, a)
  }
  dfs(0, 0, amount)
  return ans === Infinity ? -1 : ans
}

console.log(coinChange([1, 2, 5], 11) === 3)
console.log(coinChange([2], 3) === -1)
console.log(coinChange([1], 0) === 0)
