var reverseBits = function (n) {
  const b = n.toString(2).padStart(32, '0').split('').reverse().join('')
  return parseInt(b, 2)
}

console.log(reverseBits(43261596))
console.log(reverseBits(2147483644))
