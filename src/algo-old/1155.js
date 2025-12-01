var numRollsToTarget = function (n, k, target) {
  const MOD = 10 ** 9 + 7
  const memo = new Map()
  const dfs = (n, target) => {
    if (n === 0 && target === 0) {
      return 1
    }
    if (n === 0 || target <= 0) {
      return 0
    }
    const key = `${n},${target}`
    if (memo.has(key)) {
      return memo.get(key)
    }
    let res = 0
    for (let i = 1; i <= k; i++) {
      res = (res + dfs(n - 1, target - i)) % MOD
    }
    memo.set(key, res)
    return res
  }
  return dfs(n, target)
}

console.log(numRollsToTarget(1, 6, 3))
console.log(numRollsToTarget(2, 6, 7))
console.log(numRollsToTarget(30, 30, 500))
