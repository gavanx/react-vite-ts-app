var isPowerOfTwo = function (n) {
  const b = n.toString(2)
  return b[0] === '1' && b.split('1').length === 2
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))