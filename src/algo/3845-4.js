class Solution {
  maxXor(nums, k) {
    const n = nums.length
    const lefts = new Array(n).fill(0)
    // JavaScript 中用数组模拟双端队列（shift/pop/ push/unshift）
    const minQ = [] // 维护窗口内最小值的下标（单调递增队列）
    const maxQ = [] // 维护窗口内最大值的下标（单调递减队列）
    let left = 0

    // 第一步：预处理lefts数组，确定每个right对应的最小left
    for (let right = 0; right < n; right++) {
      const x = nums[right]

      // 1. 入队：维护minQ的单调性（队尾到队头递增）
      while (minQ.length > 0 && x <= nums[minQ[minQ.length - 1]]) {
        minQ.pop()
      }
      minQ.push(right)

      // 2. 入队：维护maxQ的单调性（队尾到队头递减）
      while (maxQ.length > 0 && x >= nums[maxQ[maxQ.length - 1]]) {
        maxQ.pop()
      }
      maxQ.push(right)

      // 3. 出队：如果窗口内最大-最小 >k，移动左边界
      while (nums[maxQ[0]] - nums[minQ[0]] > k) {
        left++
        // 移除不在窗口内的队首元素
        if (minQ[0] < left) {
          minQ.shift()
        }
        if (maxQ[0] < left) {
          maxQ.shift()
        }
      }

      // 记录当前right对应的最小left
      lefts[right] = left
    }

    // 第二步：构建异或前缀和数组（pre[0]=0，pre[1]=nums[0]，pre[2]=nums[0]^nums[1]...）
    const pre = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
      pre[i + 1] = pre[i] ^ nums[i]
    }

    // 第三步：试填法（贪心）找最大异或值
    // 计算nums中最大值的二进制位数，确定试填的最高位
    const maxNum = Math.max(...nums)
    const width = maxNum === 0 ? 1 : maxNum.toString(2).length
    let ans = 0

    for (let i = width - 1; i >= 0; i--) {
      // last数组：记录「前缀和右移i位后的值」对应的最新位置（保证窗口有效性）
      const last = new Array(1 << (width - i)).fill(-1)
      last[0] = 0 // pre[0] = 0 对应的位置是0
      ans <<= 1 // 答案左移一位，准备试填当前位
      const newAns = ans | 1 // 尝试将当前位设为1

      let found = false
      for (let right = 0; right < n; right++) {
        const s = pre[right + 1] >> i // 前缀和去掉低i位，只看高位
        // 检查是否存在满足条件的前缀和：newAns ^ s 存在，且位置 >= lefts[right]
        if (last[newAns ^ s] >= lefts[right]) {
          ans = newAns // 当前位可以填1，更新答案
          found = true
          break // 找到即可，无需继续检查
        }
        // 更新last：记录当前s对应的最新位置（保证后续窗口有效性）
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
