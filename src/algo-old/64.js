var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const map = new Map();
  const dfs = (i, j) => {
    const key = `${i},${j}`;
    if (map.has(key)) {
      return map.get(key);
    }
    let ret;
    if (i === m - 1 && j === n - 1) {
      ret = grid[i][j];
    } else if (i === m - 1) {
      ret = grid[i][j] + dfs(i, j + 1);
    } else if (j === n - 1) {
      ret = grid[i][j] + dfs(i + 1, j);
    } else {
      ret = grid[i][j] + Math.min(dfs(i + 1, j), dfs(i, j + 1));
    }
    map.set(key, ret);
    return ret;
  };
  return dfs(0, 0);
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]) === 7
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]) === 12
);
