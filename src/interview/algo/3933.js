var countPathsWithXorValue = function (grid, k) {
  const mod = 10 ** 9 + 7;
  const m = grid.length;
  const n = grid[0].length;
  const memo = new Map();
  const dfs = (i, j, xor) => {
    const key = `${i},${j},${xor}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    if (i >= m || j >= n) {
      return 0;
    }
    xor ^= grid[i][j];
    if (i === m - 1 && j === n - 1) {
      return xor === 0 ? 1 : 0;
    }
    const count = (dfs(i + 1, j, xor) + dfs(i, j + 1, xor)) % mod;
    memo.set(key, count);
    return count;
  };
  return dfs(0, 0, k);
};
console.log(
  countPathsWithXorValue(
    [
      [2, 1, 5],
      [7, 10, 0],
      [12, 6, 4],
    ],
    11
  ) === 3
);
console.log(
  countPathsWithXorValue(
    [
      [1, 3, 3, 3],
      [0, 3, 3, 2],
      [3, 0, 1, 1],
    ],
    2
  ) === 5
);

console.log(
  countPathsWithXorValue(
    [
      [1, 1, 1, 2],
      [3, 0, 3, 2],
      [3, 0, 2, 2],
    ],
    10
  ) === 0
);
