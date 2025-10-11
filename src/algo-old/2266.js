var countTexts = function (pressedKeys) {
  const n = pressedKeys.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1]
    if (i >= 1 && pressedKeys[i] === pressedKeys[i - 1]) {
      dp[i] = (dp[i] + 1) % 1000000007
    }
    if (i >= 2 && pressedKeys[i] === pressedKeys[i - 1] && pressedKeys[i] === pressedKeys[i - 2]) {
      dp[i] = (dp[i] + dp[i - 2]) % 1000000007
    }
    if (pressedKeys[i] === '7' || pressedKeys[i] === '9') {
      if (
        i >= 3 &&
        pressedKeys[i] === pressedKeys[i - 1] &&
        pressedKeys[i] === pressedKeys[i - 2] &&
        pressedKeys[i] === pressedKeys[i - 3]
      ) {
        dp[i] = (dp[i] + dp[i - 2] + dp[i - 3]) % 1000000007
      }
    }
  }
  return dp[n - 1]
}

console.log(countTexts('22233'))
console.log(countTexts('222222222222222222222222222222222222'))
