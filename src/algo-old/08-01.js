var waysToStep = function (n) {
  const MOD = 1000000007;
  const a = [1, 1, 2, 4];
  if (n > 3) {
    for (let i = 4; i <= n; i++) {
      a[i] = (a[i - 3] + a[i - 2] + a[i - 1]) % MOD;
    }
  }
  return a[n];
};

console.log(waysToStep(5) === 13);
console.log(waysToStep(3) === 4);
