var uniquePaths = function (m, n) {
  const c = new Map();
  const dfs = (i, j) => {
    if (i === m || j === n) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    const k = `${i}-${j}`;
    if (c.has(k)) return c.get(k);
    const t = dfs(i + 1, j) + dfs(i, j + 1);
    c.set(k, t);
    return t;
  };
  return dfs(0, 0);
};

console.log(uniquePaths(3, 2) === 3);
console.log(uniquePaths(7, 3) === 28);
console.log(uniquePaths(3, 3) === 6);
