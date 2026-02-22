var scoreDifference = function (nums) {
  let ans = [0, 0]
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      cur = 1 - cur
    }
    if ((i + 1) % 6 === 0) {
      cur = 1 - cur
    }
    ans[cur] += nums[i]
  }
  return ans[0] - ans[1]
}

console.log(scoreDifference([1, 2, 3]))
console.log(scoreDifference([2, 4, 2, 1, 2, 1]))