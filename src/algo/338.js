var countBits = function (n) {
  const a = [];
  for (let i = 0; i <= n; i++) {
    a[i] = i
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
  }
  return a;
};
console.log(countBits(2));
console.log(countBits(5));
