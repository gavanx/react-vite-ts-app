/**
 * @param {number} n
 * @return {number}
 */
function numOfWays(n) {
  const MOD = 1000000007n
  const cache = new Map()

  function dfs(i, j, preRow, curRow) {
    const key = `${i},${j},${preRow},${curRow}`

    if (cache.has(key)) {
      return cache.get(key)
    }

    if (i === 0) {
      return 1n
    }

    if (j === 3) {
      const result = dfs(i - 1, 0, curRow, 0)
      cache.set(key, result)
      return result
    }

    let res = 0n
    for (let color = 0; color < 3; color++) {
      const preColor = (preRow >> (j * 2)) & 3
      if (preRow && color === preColor) {
        continue
      }

      if (j > 0) {
        const leftColor = (curRow >> ((j - 1) * 2)) & 3
        if (color === leftColor) {
          continue
        }
      }

      const newCurRow = curRow | (color << (j * 2))
      res = (res + dfs(i, j + 1, preRow, newCurRow)) % MOD
    }

    cache.set(key, res)
    return res
  }
  return Number(dfs(n, 0, 0, 0))
}

console.log(numOfWays(1))
console.log(numOfWays(2))
console.log(numOfWays(3))
console.log(numOfWays(7))
console.log(numOfWays(5000))
