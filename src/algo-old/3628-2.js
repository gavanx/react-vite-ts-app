var numOfSubsequences = function (s) {
  var numDistinct = function (s, t) {
    const m = t.length
    const n = s.length
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
    for (let j = 0; j <= n; j++) {
      dp[0][j] = 1
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (t[i - 1] === s[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
        } else {
          dp[i][j] = dp[i][j - 1]
        }
      }
    }
    return dp[m][n]
  }
  const center = (s) => {
    let cntT = 0
    for (const c of s) {
      if (c == 'T') {
        cntT++
      }
    }

    let res = 0
    let cntL = 0
    for (const c of s) {
      if (c == 'T') {
        cntT--
      }
      if (c == 'L') {
        cntL++
      }
      res = Math.max(res, cntL * cntT)
    }
    return res
  }
  let extra = Math.max(numDistinct(s, 'CT'), numDistinct(s, 'LC'))
  extra = Math.max(extra, center(s))
  return numDistinct(s, 'LCT') + extra
}

console.log(numOfSubsequences('LMCT'))
console.log(numOfSubsequences('LCCT'))
console.log(numOfSubsequences('L'))
