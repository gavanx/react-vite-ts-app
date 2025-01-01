var tribonacci = function (n) {
  let a = 0,
    b = 1,
    c = 1;
  for (let i = 0; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return a;
};

console.log(tribonacci(4) === 4);
console.log(tribonacci(25) === 1389537);
