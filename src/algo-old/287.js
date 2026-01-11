var findDuplicate = function (nums) {
  let res = 0
  for (const x of nums) {
    res = res ^ x
  }
  return res
}

console.log(2 ^ 1 ^ 3)
console.log(findDuplicate([1, 3, 4, 2, 2]))
