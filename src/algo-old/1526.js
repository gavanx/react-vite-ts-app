var minNumberOperations = function (target) {
  let ans = 0
  let pre = 0
  for (let x of target) {
    ans += Math.max(0, x - pre)
    pre = x
  }
  return ans
}

console.log(minNumberOperations([1, 2, 3, 2, 1]))
console.log(minNumberOperations([3, 1, 5, 4, 2]))
console.log(minNumberOperations([3, 1, 1, 2]))
console.log(minNumberOperations([1, 1, 1, 1, 1]))
