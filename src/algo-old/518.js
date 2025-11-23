var change = function (amount, coins) {
  const n = coins.length
  const memo = Array.from({ length: n }, () => Array.from({ length: amount + 1 }, () => -1))
  const dfs = (i, amount) => {
    if (i === n) return amount === 0 ? 1 : 0
    if (memo[i][amount] !== -1) return memo[i][amount]
    let res = dfs(i + 1, amount)
    if (amount >= coins[i]) {
      res += dfs(i, amount - coins[i])
    }
    memo[i][amount] = res
    return res
  }
  return dfs(0, amount)
}

console.log(change(5, [1, 2, 5]))
console.log(change(3, [2]))
console.log(change(10, [10]))
