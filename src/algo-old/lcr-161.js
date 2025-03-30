var maxSales = function (sales) {
  let ans = -Infinity,
    sum = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
    if (sum < sales[i]) {
      sum = sales[i];
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

console.log(maxSales([5, 4, -1, 7, 8]) === 23);
console.log(maxSales([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSales([-1]) === -1);
