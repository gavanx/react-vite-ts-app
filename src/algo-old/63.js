var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const map = new Map();
  const dfs = (i, j) => {
    const key = `${i},${j}`;
    if (map.has(key)) {
      return map.get(key);
    }
    if (i === m || j === n || obstacleGrid[i][j] === 1) {
      return 0;
    }
    if (i === m - 1 && j === n - 1) {
      return 1;
    }
    const ret = dfs(i + 1, j) + dfs(i, j + 1);
    map.set(key, ret);
    return ret;
  };
  return dfs(0, 0);
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]) === 2
);

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]) === 1
);
