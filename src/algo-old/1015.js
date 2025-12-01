var smallestRepunitDivByK = function (k) {
  let x = 1 % k
  const visited = new Set()
  for (let length = 1; length <= k; length++) {
    if (x === 0) {
      return length
    }
    if (visited.has(x)) {
      return -1
    }
    visited.add(x)
    x = (x * 10 + 1) % k
  }
  return -1
}

console.log(smallestRepunitDivByK(1))
console.log(smallestRepunitDivByK(2))
console.log(smallestRepunitDivByK(3))
console.log(smallestRepunitDivByK(7))
