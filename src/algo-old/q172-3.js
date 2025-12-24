// 给你一个长度为 n 的整数数组 nums 和一个相同长度的二进制字符串 s。

// 一开始，你的分数为 0。对于每一个 s[i] = '1' 的下标 i，都会为分数贡献 nums[i]。

// 你可以执行 任意 次操作（包括零次）。在一次操作中，你可以选择一个下标 i（0 <= i < n - 1），满足 s[i] = '0' 且 s[i + 1] = '1'，并交换这两个字符。

// 返回一个整数，表示你可以获得的 最大可能分数。

function maxScore(nums, s) {
  const n = nums.length
  const ones = []
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones.push(i)
  }
  const k = ones.length
  if (k === 0) return 0

  const dp = Array.from({ length: k }, () => Array(n).fill(-Infinity))
  const max_arr = Array.from({ length: k }, () => Array(n).fill(-Infinity))

  for (let j = 0; j < n; j++) {
    if (j <= ones[0]) {
      dp[0][j] = nums[j]
    }
  }
  let currentMax = -Infinity
  for (let j = 0; j < n; j++) {
    if (dp[0][j] > currentMax) currentMax = dp[0][j]
    max_arr[0][j] = currentMax
  }

  for (let i = 1; i < k; i++) {
    currentMax = -Infinity
    for (let j = 0; j < n; j++) {
      if (j >= i && j <= ones[i]) {
        dp[i][j] = max_arr[i - 1][j - 1] + nums[j]
        if (dp[i][j] > currentMax) currentMax = dp[i][j]
      }
      max_arr[i][j] = currentMax
    }
  }

  return max_arr[k - 1][ones[k - 1]]
}

console.log(maxScore([4, 7, 2, 9], '0000') === 0)
console.log(maxScore([2, 1, 5, 2, 3], '01010') === 7)
console.log(maxScore([4, 4, 3, 10, 6, 3, 9, 8], '00010010') === 19)