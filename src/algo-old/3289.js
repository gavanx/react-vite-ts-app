var getSneakyNumbers = function (nums) {
  const map = new Map()
  const res = []
  for (let n of nums) {
    if (map.has(n)) {
      res.push(n)
    } else {
      map.set(n, 1)
    }
  }
  return res
}

console.log(getSneakyNumbers([0, 1, 1, 0]))
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]))
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]))
