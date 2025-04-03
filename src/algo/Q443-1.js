var minCosts = function (cost) {
  const n = cost.length;
  let i, j, min;
  const res = [];
  for (i = 0; i < n; i++) {
    min = Math.min(cost[i], res[i - 1] || Infinity);
    for (j = i + 1; j < n; j++) {
      if (cost[j] >= min) {
        res.push(min);
        break;
      }
    }
    if (j === n) {
      res.push(min);
    }
  }
  return res;
};

console.log(minCosts([5, 3, 4, 1, 3, 2]));
console.log(minCosts([1, 2, 4, 6, 7]));
