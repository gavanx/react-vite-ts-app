var isOneBitCharacter = function (bits) {
  const max = bits.length - 1
  let i = 0
  while (i < max) {
    i += bits[i] + 1
  }
  return i === max
}

console.log(isOneBitCharacter([1, 0, 0]))
console.log(isOneBitCharacter([1, 1, 1, 0]))
