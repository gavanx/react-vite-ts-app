var trainWays = function (num) {
  if (num === 0) {
    return 1;
  } else if (num <= 2) {
    return num;
  }
  const MOD = 1000000007;
  let a = 1,
    b = 2;
  for (let i = 3; i <= num; i++) {
    [a, b] = [b, (a + b) % MOD];
  }
  return b;
};

console.log(trainWays(0) === 1);
console.log(trainWays(2) === 2);
console.log(trainWays(5) === 8);
