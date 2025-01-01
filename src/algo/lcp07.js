var numWays = function (n, relation, k) {
  const map = new Map();
  const dfs = (s, t, k) => {
    const c = map.get(`${s},${t},${k}`);
    if (c !== undefined) {
      return c;
    }
    if (k === 0) {
      return s === t ? 1 : 0;
    }
    let res = 0;
    for (let i = 0; i < relation.length; i++) {
      const [from, to] = relation[i];
      if (from === s) {
        res += dfs(to, t, k - 1);
      }
    }
    map.set(`${s},${t},${k}`, res);
    return res;
  };
  return dfs(0, n - 1, k);
};

console.log(
  numWays(
    5,
    [
      [0, 2],
      [2, 1],
      [3, 4],
      [2, 3],
      [1, 4],
      [2, 0],
      [0, 4],
    ],
    3
  ) === 3
);

console.log(
  numWays(
    3,
    [
      [0, 2],
      [2, 1],
    ],
    2
  ) === 0
);
