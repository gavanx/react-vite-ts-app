var maxProfit = function (prices) {
  let min = prices[0];
  let sum = 0;
  let cur;
  for (let i = 1; i < prices.length; i++) {
    cur = prices[i];
    if (cur > min) {
      sum += cur - min;
      min = cur;
    } else {
      min = cur;
    }
  }
  return sum;
};
console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
