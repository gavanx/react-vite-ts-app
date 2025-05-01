var uniquePaths = function (m, n) {
  const dfs = (i, j) => {
    if (i === m - 1 && j === n - 1) return 1;
    if (i >= m || j >= n) return 0;
    return dfs(i + 1, j) + dfs(i, j + 1);
  };
  return dfs(0, 0);
};

console.log(uniquePaths(3, 7) === 28);
console.log(uniquePaths(3, 2) === 3);
console.log(uniquePaths(7, 3) === 28);
console.log(uniquePaths(3, 3) === 6);
// console.log(uniquePaths(23, 12) === 6);
