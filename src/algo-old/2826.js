var minimumOperations = function (nums) {
  const upperBound = function (g, target) {
    let left = -1,
      right = g.length
    while (left + 1 < right) {
      let mid = (left + right) >>> 1
      if (g[mid] > target) {
        right = mid
      } else {
        left = mid
      }
    }
    return right
  }

  let g = []
  for (let x of nums) {
    let j = upperBound(g, x)
    if (j === g.length) {
      g.push(x)
    } else {
      g[j] = x
    }
  }
  return nums.length - g.length
}

console.log(minimumOperations([2, 1, 3, 2, 1]))
console.log(minimumOperations([1, 3, 2, 1, 3, 3]))
console.log(minimumOperations([2, 2, 2, 2]))
