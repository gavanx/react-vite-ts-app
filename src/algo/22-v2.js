var generateParenthesis = function (n) {
  const c = new Map();
  c.set(0, ['']);
  c.set(1, ['()']);
  const dfs = (n) => {
    if (c.has(n)) {
      return c.get(n);
    }
    const s = new Set();
    for (let i = 0; i < n; i++) {
      const a = dfs(i);
      const b = dfs(n - i - 1);
      a.forEach((v1) => {
        b.forEach((v2) => {
          s.add(`(${v1})${v2}`);
        });
      });
    }
    const r = [...s];
    c.set(n, r);
    return r;
  };
  return dfs(n);
};

console.log(generateParenthesis(4));
