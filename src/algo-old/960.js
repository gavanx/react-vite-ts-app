/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  const W = A[0].length
  const dp = new Array(W).fill(1)

  for (let i = W - 2; i >= 0; i--) {
    for (let j = i + 1; j < W; j++) {
      let valid = true
      for (const row of A) {
        if (row[i] > row[j]) {
          valid = false
          break
        }
      }
      if (valid) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
  }

  return W - Math.max(...dp)
}

// 测试用例
console.log(minDeletionSize(['babca', 'bbazb'])) // 3
console.log(minDeletionSize(['edcba'])) // 4
console.log(minDeletionSize(['ghi', 'def', 'abc'])) // 0
