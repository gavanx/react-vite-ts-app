var rotateElements = function (nums, k) {
  const n = nums.length
  const arr = []
  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      arr.push([nums[i], i])
    }
  }
  if (arr.length === 0) {
    return nums
  }
  k = k % arr.length
  const rotated = arr.slice(k).concat(arr.slice(0, k))
  for (let i = 0; i < rotated.length; i++) {
    nums[arr[i][1]] = rotated[i][0]
  }
  return nums
}

console.log(rotateElements([1, -2, 3, -4], 3))// [3,-2,1,-4]©leetcode
console.log(rotateElements([5, 4, -9, 6], 2))//[6,5,-9,4]©leetcode