var kthCharacter = function (k, operations) {
  k--
  let c = 0
  for (let i = Math.floor(Math.log2(k)); i >= 0; i--) {
    if ((BigInt(k) >> BigInt(i)) & 1n) {
      c += operations[i]
    }
  }
  return String.fromCharCode('a'.charCodeAt(0) + (c % 26))
}

console.log(kthCharacter(5, [0, 0, 0]))
console.log(kthCharacter(10, [0, 1, 0, 1]))
