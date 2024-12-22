var maxProfit = function (prices) {
  const l = prices.length;
  const f = Array.from({ length: l }, () => [0, 0, 0]);
  let i = 0;
  f[i][0] = -prices[i];
  f[i][1] = 0;
  f[i][2] = 0;
  for (i = 1; i < l; i++) {
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]); // 持有
    f[i][1] = f[i - 1][0] + prices[i]; // 不持有，冻结
    f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]); // 不持有，不冻结
  }
  return Math.max(f[l - 1][1], f[l - 1][2]);
};
console.log(maxProfit([1]));
