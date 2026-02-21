class Solution {
  maxXor(nums, k) {
    const n = nums.length
    const lefts = new Array(n).fill(0)
    const minQ = []
    const maxQ = []
    let left = 0

    for (let right = 0; right < n; right++) {
      const x = nums[right]
      while (minQ.length > 0 && x <= nums[minQ[minQ.length - 1]]) {
        minQ.pop()
      }
      minQ.push(right)
      while (maxQ.length > 0 && x >= nums[maxQ[maxQ.length - 1]]) {
        maxQ.pop()
      }
      maxQ.push(right)
      while (nums[maxQ[0]] - nums[minQ[0]] > k) {
        left++
        if (minQ[0] < left) {
          minQ.shift()
        }
        if (maxQ[0] < left) {
          maxQ.shift()
        }
      }
      lefts[right] = left
    }

    const pre = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
      pre[i + 1] = pre[i] ^ nums[i]
    }

    const maxNum = Math.max(...nums)
    const width = maxNum === 0 ? 1 : maxNum.toString(2).length
    let ans = 0

    for (let i = width - 1; i >= 0; i--) {
      const last = new Array(1 << (width - i)).fill(-1)
      last[0] = 0
      ans <<= 1
      const newAns = ans | 1

      let found = false
      for (let right = 0; right < n; right++) {
        const s = pre[right + 1] >> i
        if (last[newAns ^ s] >= lefts[right]) {
          ans = newAns
          found = true
          break
        }
        last[s] = right + 1
      }
      if (found) continue
    }

    return ans
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1
const nums1 = [1, 2, 3, 4, 5]
const k1 = 2
console.log(solution.maxXor(nums1, k1)) // 输出参考：根据算法逻辑计算的最大异或值

// 测试用例2
const nums2 = [5, 6, 7, 8]
const k2 = 3
console.log(solution.maxXor(nums2, k2))
