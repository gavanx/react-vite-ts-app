const maxSumTrionic = (nums) => {
  let ans = -Infinity
  let f1 = -Infinity
  let f2 = -Infinity
  let f3 = -Infinity

  for (let i = 0; i < nums.length - 1; i++) {
    const x = nums[i]
    const y = nums[i + 1]

    f3 = x < y ? Math.max(f3, f2) + y : -Infinity
    f2 = x > y ? Math.max(f2, f1) + y : -Infinity
    f1 = x < y ? Math.max(f1, x) + y : -Infinity
    ans = Math.max(ans, f3)
  }

  return ans
}

console.log(maxSumTrionic([0, -2, -1, -3, 0, 2, -1]))
console.log(maxSumTrionic([1, 4, 2, 7]))
