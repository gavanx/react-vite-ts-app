var longestIncreasingPath = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(0));
  const directions = [
    [1, 0], //右
    [-1, 0], //左
    [0, 1], //下
    [0, -1], //上
  ];
  const dfs = (i, j) => {
    if (memo[i][j] !== 0) return memo[i][j];
    let max = 1;
    for (let [x, y] of directions) {
      const newX = i + x;
      const newY = j + y;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        matrix[newX][newY] > matrix[i][j]
      ) {
        max = Math.max(max, dfs(newX, newY) + 1);
      }
    }
    memo[i][j] = max;
    return max;
  };
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }
  return res;
};

console.log(longestIncreasingPath([[1]]));
