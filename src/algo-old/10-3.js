var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'))
      }
    }
  }
  return dp[m][n]
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('mississippi', 'mis*is*p*.'))
console.log(isMatch('a', 'ab*')) // true
console.log(isMatch('aaa', 'ab*a')) // false
console.log(isMatch('bbbba', '.*a*a')) // true
