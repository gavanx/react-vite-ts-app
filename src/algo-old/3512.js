var minOperations = function (nums, k) {
  let s = 0
  for (let x of nums) {
    s += x
  }
  return s % k
}

console.log(minOperations([3, 9, 7], 5))
console.log(minOperations([4, 1, 3], 4))
console.log(minOperations([3, 2], 6))
