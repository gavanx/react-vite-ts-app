// 使用立即执行函数进行封装

var sumFourDivisors = function (nums) {
  const MX = 100001
  const divisorNum = new Array(MX).fill(0)
  const divisorSum = new Array(MX).fill(0)

  for (let i = 1; i < MX; i++) {
    for (let j = i; j < MX; j += i) {
      divisorNum[j] += 1
      divisorSum[j] += i
    }
  }
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (divisorNum[x] === 4) {
      ans += divisorSum[x]
    }
  }

  return ans
}
