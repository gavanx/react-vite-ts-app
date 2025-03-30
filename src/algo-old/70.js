var climbStairs = function (n) {
  const c = new Map();
  c.set(1, 1);
  c.set(2, 2);
  const f = (m) => {
    if (c.has(m)) {
      return c.get(m);
    }
    const v = f(m - 1) + f(m - 2);
    c.set(m, v);
    return v;
  };
  return f(n);
};

console.log(climbStairs(2) === 2);
console.log(climbStairs(3) === 3);
