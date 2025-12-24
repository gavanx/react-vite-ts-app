/**
 * @param {number[]} prices - 价格数组
 * @param {number[]} strategy - 策略数组
 * @param {number} k - 可修改的天数
 * @return {number} 最大利润
 */
function maxProfit(prices, strategy, k) {
  const n = prices.length;

  const s = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + prices[i] * strategy[i];
  }

  const s2 = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    s2[i + 1] = s2[i] + prices[i];
  }

  let ans = s[n];
  for (let i = k; i <= n; i++) {
    const value = s[i - k] + (s[n] - s[i]) + (s2[i] - s2[i - k / 2]);
    ans = Math.max(ans, value);
  }

  return ans
}

console.log(maxProfit([5, 4, 3], [1, 1, 0], 2))