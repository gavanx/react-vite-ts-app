var getMaxLen = function (nums) {
  let negative = 0
  let firstNeg = -1
  let lastNeg = -1
  let ans = 0
  let start = 0
  nums.push(0)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative++
      if (firstNeg === -1) {
        firstNeg = i
      }
      lastNeg = i
    } else if (nums[i] === 0) {
      if (negative % 2 === 0) {
        ans = Math.max(ans, i - start)
      } else {
        ans = Math.max(ans, i - firstNeg - 1, lastNeg - start)
      }
      start = i + 1
      firstNeg = -1
      lastNeg = -1
      negative = 0
    }
  }
  return ans
}

console.log(getMaxLen([1, -2, -3, 4])) //4
console.log(getMaxLen([0, 1, -2, -3, -4])) //3
console.log(getMaxLen([-1, -2, -3, 0, 1])) //2
