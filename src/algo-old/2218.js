var maxValueOfCoins = function (piles, k) {
  const n = piles.length
  const memo = Array.from({ length: n }, () => Array(k + 1).fill(-1))
  const dfs = (i, rem) => {
    if (i === n || rem === 0) return 0
    if (memo[i][rem] !== -1) return memo[i][rem]
    let res = dfs(i + 1, rem)
    let cur = 0
    for (let j = 0; j < piles[i].length && j < rem; j++) {
      cur += piles[i][j]
      res = Math.max(res, cur + dfs(i + 1, rem - j - 1))
    }
    memo[i][rem] = res
    return res
  }
  return dfs(0, k)
}

console.log(
  maxValueOfCoins(
    [
      [1, 100, 3],
      [7, 8, 9],
    ],
    2
  )
)
console.log(maxValueOfCoins([[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], 7))
