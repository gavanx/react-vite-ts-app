var prefixesDivBy5 = function (nums) {
  const res = []
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    num = ((num << 1) + nums[i]) % 10
    res.push(num === 0 || num === 5)
  }
  return res
}

console.log(prefixesDivBy5([0, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1]))
