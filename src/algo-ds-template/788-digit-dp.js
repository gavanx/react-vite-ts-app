function rotatedDigits(n) {
  const DIFFS = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]
  const s = n.toString()
  const len = s.length

  const memo = Array.from({ length: len }, () => Array.from({ length: 2 }, () => Array(2).fill(-1)))

  function dfs(i, hasDiff, isLimit) {
    hasDiff = !!hasDiff ? 1 : 0
    isLimit = !!isLimit ? 1 : 0
    if (i === len) {
      return hasDiff ? 1 : 0
    }
    if (memo[i][hasDiff][isLimit] !== -1) {
      return memo[i][hasDiff][isLimit]
    }

    let res = 0
    const up = isLimit ? parseInt(s[i]) : 9

    for (let d = 0; d <= up; d++) {
      if (DIFFS[d] === -1) continue
      res += dfs(i + 1, hasDiff || DIFFS[d], isLimit && d === up)
    }

    memo[i][hasDiff][isLimit] = res
    return res
  }

  return dfs(0, 0, 1)
}
console.log(rotatedDigits(10))
