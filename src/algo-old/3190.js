var minimumOperations = function (nums) {
  let res = 0
  for (const x of nums) {
    res += Math.min(x % 3, 1)
  }
  return res
}

console.log(minimumOperations([1, 2, 3, 4]))
console.log(minimumOperations([3, 6, 9]))
