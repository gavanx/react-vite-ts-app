var leastMinutes = function (n) {
  return Math.ceil(Math.log(n) / Math.log(2)) + 1;
};

console.log(leastMinutes(2) === 2);
console.log(leastMinutes(4) === 3);
// console.log(leastMinutes(100000) === 3);
