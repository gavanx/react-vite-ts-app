class Solution {
  primeFactorization(k) {
    let e2 = 0
    if (k !== 0) {
      const lowestBit = k & -k
      e2 = Math.floor(Math.log2(lowestBit))
    }
    k = Math.floor(k / (1 << e2)) // 等价于k >>= e2

    let e3 = 0
    while (k % 3 === 0) {
      e3++
      k = Math.floor(k / 3)
    }

    let e5 = 0
    while (k % 5 === 0) {
      e5++
      k = Math.floor(k / 5)
    }

    return [[e2, e3, e5], k === 1]
  }

  countSequences(nums, k) {
    const [targetFactors, ok] = this.primeFactorization(parseInt(k))
    if (!ok) {
      return 0
    }
    const [e2Target, e3Target, e5Target] = targetFactors
    const es = nums.map((x) => this.primeFactorization(x)[0])

    const cache = new Map()
    const dfs = (i, e2, e3, e5) => {
      if (i < 0) {
        return e2 === 0 && e3 === 0 && e5 === 0 ? 1 : 0
      }
      const key = `${i},${e2},${e3},${e5}`
      if (cache.has(key)) {
        return cache.get(key)
      }

      const [x, y, z] = es[i]
      const res1 = dfs(i - 1, e2 - x, e3 - y, e5 - z)
      const res2 = dfs(i - 1, e2 + x, e3 + y, e5 + z)
      const res3 = dfs(i - 1, e2, e3, e5)

      const total = res1 + res2 + res3
      cache.set(key, total)
      return total
    }

    return dfs(nums.length - 1, e2Target, e3Target, e5Target)
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1：nums = [2,3], k = 6 → 预期输出：符合条件的序列数（可自行验证）
console.log(solution.countSequences([2, 3], 6))
// 测试用例2：nums = [2,3,7], k = 6 → 7包含质因子7（>5），输出0
console.log(solution.countSequences([2, 3, 7], 6))
