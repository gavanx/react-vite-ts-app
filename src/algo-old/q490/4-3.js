/**
 * 对应Python的Solution类，实现质因子分解和序列计数功能
 */
class Solution {
  /**
   * 分解数字k的质因子2、3、5，并判断是否仅包含<=5的质因子
   * @param {number} k - 待分解的整数
   * @returns {[number[], boolean]} - [ [e2, e3, e5], 是否仅含2/3/5质因子 ]
   */
  primeFactorization(k) {
    // 计算质因子2的个数（Python: (k & -k).bit_length() - 1）
    let e2 = 0
    if (k !== 0) {
      // 计算k的最低位1对应的2的幂次（等价于Python的 (k & -k).bit_length() - 1）
      const lowestBit = k & -k
      e2 = Math.floor(Math.log2(lowestBit))
    }
    k = Math.floor(k / (1 << e2)) // 等价于k >>= e2

    // 计算质因子3的个数
    let e3 = 0
    while (k % 3 === 0) {
      e3++
      k = Math.floor(k / 3)
    }

    // 计算质因子5的个数
    let e5 = 0
    while (k % 5 === 0) {
      e5++
      k = Math.floor(k / 5)
    }

    return [[e2, e3, e5], k === 1]
  }

  /**
   * 统计满足条件的序列数量
   * @param {number[]} nums - 输入数组
   * @param {number} k - 目标数字
   * @returns {number} - 符合条件的序列数
   */
  countSequences(nums, k) {
    const [targetFactors, ok] = this.primeFactorization(parseInt(k))
    if (!ok) {
      // k包含大于5的质因子，直接返回0
      return 0
    }
    const [e2Target, e3Target, e5Target] = targetFactors

    // 预处理nums中每个数的质因子2、3、5个数
    const es = nums.map((x) => this.primeFactorization(x)[0])

    // 手动实现缓存（替代Python的@cache装饰器）
    const cache = new Map()
    const dfs = (i, e2, e3, e5) => {
      // 递归终止条件：遍历完所有数字
      if (i < 0) {
        return e2 === 0 && e3 === 0 && e5 === 0 ? 1 : 0
      }

      // 生成缓存key（将参数转为字符串作为唯一标识）
      const key = `${i},${e2},${e3},${e5}`
      if (cache.has(key)) {
        return cache.get(key)
      }

      // 获取当前数字的质因子个数
      const [x, y, z] = es[i]
      // 三种选择：除以当前数、乘以当前数、不操作
      const res1 = dfs(i - 1, e2 - x, e3 - y, e5 - z)
      const res2 = dfs(i - 1, e2 + x, e3 + y, e5 + z)
      const res3 = dfs(i - 1, e2, e3, e5)

      const total = res1 + res2 + res3
      cache.set(key, total) // 存入缓存
      return total
    }

    // 从最后一个数字开始递归，初始目标是k的质因子个数
    return dfs(nums.length - 1, e2Target, e3Target, e5Target)
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1：nums = [2,3], k = 6 → 预期输出：符合条件的序列数（可自行验证）
console.log(solution.countSequences([2, 3], 6))
// 测试用例2：nums = [2,3,7], k = 6 → 7包含质因子7（>5），输出0
console.log(solution.countSequences([2, 3, 7], 6))
