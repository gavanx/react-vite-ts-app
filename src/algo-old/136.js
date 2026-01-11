var singleNumber = function (nums) {
  let res = 0
  for (const x of nums) {
    res = res ^ x
  }
  return res
}

console.log(0 ^ 100)
