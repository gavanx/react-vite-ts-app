var minNumberOperations = function (target) {
  let ans = target[0]
  for (let i = 1; i < target.length; i++) {
    ans += Math.max(target[i] - target[i - 1], 0)
  }
  return ans
}

console.log(minNumberOperations([1, 2, 3, 2, 1]))
console.log(minNumberOperations([3, 1, 5, 4, 2]))
console.log(minNumberOperations([3, 1, 1, 2]))
console.log(minNumberOperations([1, 1, 1, 1, 1]))
