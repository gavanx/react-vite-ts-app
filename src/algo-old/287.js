var findDuplicate = function (nums) {
  let ans = 1
  for (const x of nums) {
    ans &= x
  }
  return ans
}

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // 3
