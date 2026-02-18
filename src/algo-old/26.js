var removeDuplicates = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j - 1]) {
      nums[j++] = nums[i]
    }
  }
  return j
}
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
