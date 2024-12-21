var maxAmount = function (initialCurrency, pairs1, rates1, pairs2, rates2) {
  const len = 11;
  const c = [initialCurrency];
  const a = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => 0)
  );
  a[0][0] = 1;
  for (let i = 0; i < pairs1.length; i++) {
    const p = pairs1[i];
    let s = c.indexOf(p[0]);
    if (s === -1) {
      s = c.length;
      c.push(p[0]);
    }
    let t = c.indexOf(p[1]);
    if (t === -1) {
      t = c.length;
      c.push(p[1]);
    }
    a[s][t] = rates1[i];
    a[t][s] = 1 / rates1[i];
  }

  const b = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => 0)
  );
  b[0][0] = 1;
  for (let i = 0; i < pairs2.length; i++) {
    const p = pairs2[i];
    let s = c.indexOf(p[0]);
    if (s === -1) {
      s = c.length;
      c.push(p[0]);
    }
    let t = c.indexOf(p[1]);
    if (t === -1) {
      t = c.length;
      c.push(p[1]);
    }
    b[s][t] = rates2[i];
    b[t][s] = 1 / rates2[i];
  }
  for (let i = 0; i < c.length; i++) {
    a[i][i] = 1;
    b[i][i] = 1;
  }
  let max = 1;
  for (let i = 1; i < c.length; i++) {
    let t = a[0][i] * b[i][0];
    if (t > max) {
      max = t;
    }
  }
  return max;
};

console.log(
  maxAmount(
    "EUR",
    [
      ["EUR", "USD"],
      ["USD", "JPY"],
    ],
    [2.0, 3.0],
    [
      ["JPY", "USD"],
      ["USD", "CHF"],
      ["CHF", "EUR"],
    ],
    [4.0, 5.0, 6.0]
  )
);
