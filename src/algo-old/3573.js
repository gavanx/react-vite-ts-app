var maximumProfit = function (prices, k) {
  const n = prices.length
  const dfs = (i, transactionsLeft, holding) => {
    if (i === n || transactionsLeft < 0) return 0
    const doNothing = dfs(i + 1, transactionsLeft, holding)
    if (holding) {
      const sell = prices[i] + dfs(i + 1, transactionsLeft - 1, false)
      return Math.max(doNothing, sell)
    } else {
      const buy = -prices[i] + dfs(i + 1, transactionsLeft, true)
      return Math.max(doNothing, buy)
    }
  }
  return dfs(0, k, false)
}

console.log(maximumProfit([1, 7, 9, 8, 2], 2))
