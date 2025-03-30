var minimumOperations = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0,
    tmp;
  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (grid[i][j] <= grid[i - 1][j]) {
        tmp = grid[i - 1][j] + 1;
        ans += tmp - grid[i][j];
        grid[i][j] = tmp;
      }
    }
  }
  return ans;
};

console.log(
  minimumOperations([
    [3, 2],
    [1, 3],
    [3, 4],
    [0, 1],
  ]) === 15
);

console.log(
  minimumOperations([
    [3, 2, 1],
    [2, 1, 0],
    [1, 2, 3],
  ]) === 12
);
