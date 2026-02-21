class Solution {
  longestSubsequence(nums) {
    let ans = 0
    if (nums.length === 0) return ans // 边界：空数组返回0

    // 步骤1：计算nums最大值的二进制位数（替代Python的bit_length）
    const maxNum = Math.max(...nums)
    const w = maxNum === 0 ? 1 : maxNum.toString(2).length

    // 步骤2：遍历每一个二进制位
    for (let i = 0; i < w; i++) {
      const bit = 1 << i // 第i位的掩码（如i=0时bit=1，i=1时bit=2）
      const f = [] // 维护贪心的LIS数组

      // 步骤3：筛选第i位为1的数字，求其LIS长度
      for (const x of nums) {
        // 只处理二进制第i位为1的数字
        if ((x & bit) === 0) continue

        // 二分查找：找到x在f中第一个>=x的位置（替代Python的bisect_left）
        let left = 0,
          right = f.length
        while (left < right) {
          const mid = (left + right) >> 1
          if (f[mid] >= x) {
            right = mid
          } else {
            left = mid + 1
          }
        }
        const j = left

        // 贪心更新LIS数组
        if (j < f.length) {
          f[j] = x
        } else {
          f.push(x)
        }
      }

      // 更新最大长度
      ans = Math.max(ans, f.length)
    }

    return ans
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1
const nums1 = [3, 5, 7, 10, 12]
console.log(solution.longestSubsequence(nums1)) // 输出：4（比如第0位为1的数字[3,5,7,10(无),12(无)] → LIS长度3；第1位为1的数字[3(无),5,7,10,12] → LIS长度4）

// 测试用例2
const nums2 = [1, 2, 4, 8, 16]
console.log(solution.longestSubsequence(nums2)) // 输出：1（每个位只有1个数字）

// 测试用例3
const nums3 = [2, 3, 5, 7, 11, 13]
console.log(solution.longestSubsequence(nums3)) // 输出：6（第0位为1的数字全部满足，LIS长度6）
