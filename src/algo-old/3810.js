var minOperations = function (nums, target) {
  const s = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target[i]) {
      s.add(nums[i])
    }
  }
  return s.size
}

console.log(minOperations([1, 2, 3], [3, 2, 1])) //2
console.log(minOperations([4, 1, 4], [5, 1, 4])) //1
console.log(minOperations([7, 3, 7], [5, 5, 9])) //2
