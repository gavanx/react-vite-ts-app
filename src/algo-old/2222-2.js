
var numberOfWays = function (s) {
  const n = s.length
  const dfs = (i, prevChar, count, targetCount) => {
    if (count === targetCount) return 1
    if (i >= n) return 0

    let totalWays = 0
    for (let j = i; j < n; j++) {
      if (s[j] !== prevChar) {
        totalWays += dfs(j + 1, s[j], count + 1, targetCount)
      }
    }
    return totalWays
  }

  return dfs(0, '', 0, 3)
}

console.log(numberOfWays('001101')) // 6
console.log(numberOfWays('11100')) // 0