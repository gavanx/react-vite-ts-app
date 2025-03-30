var getKth = function (lo, hi, k) {
  const l = hi - lo + 1;
  const a = [];
  for (let i = 0; i < l; i++) {
    a[i] = lo + i;
  }
  const c = new Map();
  const th = (v) => {
    if (v === 1) {
      return 0;
    }
    if (c.has(v)) {
      return c.get(v);
    }
    let ret;
    if (v % 2 === 0) {
      ret = 1 + th(v / 2);
    } else {
      ret = 1 + th(3 * v + 1);
    }
    c.set(v, ret);
    return ret;
  };
  a.sort((a, b) => {
    const aa = th(a);
    const bb = th(b);
    if (aa === bb) {
      return a - b;
    } else {
      return aa - bb;
    }
  });
  return a[k - 1];
};

console.log(getKth(12, 15, 2));
console.log(getKth(7, 11, 4));
