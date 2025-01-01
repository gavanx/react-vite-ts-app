var smallestNumber = function (n) {
  const a = n.toString(2).length;
  return 2 ** a - 1;
};

console.log(smallestNumber(3))
console.log(smallestNumber(5))
console.log(smallestNumber(10))