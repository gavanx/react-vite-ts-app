class Solution {
  /**
   * 计算第n小的具有恰好k个1的二进制数
   * @param {number} n - 第n小（从1开始）
   * @param {number} k - 二进制数中1的个数
   * @return {bigint} - 结果（使用BigInt处理大数）
   */
  nthSmallest(n, k) {
    // 使用BigInt处理大数
    let ans = 0n
    let nBig = BigInt(n)
    let kBig = BigInt(k)

    // 从高位到低位（第49位到第0位）逐位确定
    for (let i = 49; i >= 0; i--) {
      // 计算C(i, k)：第i位填0时，剩余i位中选k个1的方案数
      const c = this.combination(i, kBig)

      if (nBig > c) {
        // n比较大，第i位必须填1
        nBig -= c
        ans |= 1n << BigInt(i)
        kBig -= 1n

        if (kBig === 0n) {
          // 填完了所有的1，剩余低位都是0
          return ans
        }
      }
    }

    return ans
  }

  /**
   * 计算组合数C(n, k) = n! / (k! * (n-k)!)
   * 使用BigInt处理大数，优化计算避免阶乘溢出
   * @param {number} n
   * @param {bigint} kBig
   * @returns {bigint}
   */
  combination(n, kBig) {
    const k = Number(kBig)

    // 边界情况处理
    if (k < 0 || k > n) return 0n
    if (k === 0 || k === n) return 1n
    if (k === 1 || k === n - 1) return BigInt(n)

    // 使用较小的k计算（C(n,k) = C(n, n-k)）
    const effectiveK = Math.min(k, n - k)

    // 优化计算：C(n,k) = n*(n-1)*...*(n-k+1) / k!
    let result = 1n
    for (let i = 0; i < effectiveK; i++) {
      result = result * BigInt(n - i)
      result = result / BigInt(i + 1)
    }

    return result
  }
}
const solution = new Solution();

// 示例1：计算第3小的具有2个1的二进制数
// 二进制数：3(11), 5(101), 6(110), 9(1001)...
// 第3小：6(110) = 6
console.log(Number(solution.nthSmallest(3, 2))); // 6

// 示例2：计算第1小的具有3个1的二进制数
// 7(111) = 7
console.log(Number(solution.nthSmallest(1, 3))); // 7

// 处理大数示例
console.log(solution.nthSmallest(100, 10).toString()); // 大数结果


console.log(Number(solution.nthSmallest(4, 2))); // 9
console.log(Number(solution.nthSmallest(3, 1))); // 4