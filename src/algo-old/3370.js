var smallestNumber = function (n) {
  const res = n.toString(2).replace(/0/g, '1')
  return parseInt(res, 2)
}

console.log(smallestNumber(5))
console.log(smallestNumber(10))

console.log(smallestNumber(3))
