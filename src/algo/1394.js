var findLucky = function (arr) {
  let c = new Map()
  for (let v of arr) {
    if (c.has(v)) {
      c.set(v, c.get(v) + 1)
    } else {
      c.set(v, 1)
    }
  }
  let max = -1
  for (let [k, v] of c) {
    if (k === v) {
      max = Math.max(max, k)
    }
  }
  return max
}

console.log(findLucky([2, 2, 3, 4]))
console.log(findLucky([1, 2, 2, 3, 3, 3]))
console.log(findLucky([2, 2, 2, 3, 3]))
console.log(findLucky([5]))
console.log(findLucky([7, 7, 7, 7, 7, 7, 7]))