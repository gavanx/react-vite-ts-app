var countTriples = function (n) {
  let count = 0
  const nn = n ** 2
  let tmp
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      tmp = i ** 2 + j ** 2
      if (tmp <= nn && Math.sqrt(tmp) % 1 === 0) {
        count++
      }
    }
  }
  return count * 2
}

console.log(countTriples(5))

console.log(countTriples(10))
