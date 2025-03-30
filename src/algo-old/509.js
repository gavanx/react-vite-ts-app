var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let a = 0,
      b = 1,
      c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
