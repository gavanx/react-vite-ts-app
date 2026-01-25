/**
 * 将数组中的 m 个数字通过增加操作，使得它们的按位与结果最大
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maximumAND = function (nums, k, m) {
  const n = nums.length

  // 特殊情况处理
  if (m > n) m = n // 不能超过数组长度
  if (k === 0 || n === 0 || m === 0) {
    // 如果k=0或没有数字可选，返回所有数字的AND
    if (n === 0) return 0
    let andAll = nums[0]
    for (let i = 1; i < n; i++) {
      andAll &= nums[i]
    }
    return andAll
  }

  const ops = new Array(n).fill(0) // 每个数的操作次数
  let ans = 0

  // 计算最大可能值的位数
  let maxNum = Math.max(...nums)
  const maxWidth = (maxNum + k).toString(2).length

  // 从高位到低位贪心构造答案
  for (let bit = maxWidth - 1; bit >= 0; bit--) {
    // 尝试在当前位置设置1
    const candidate = ans | (1 << bit)
    let target = candidate

    // 计算每个数字达到target所需的最小操作次数
    for (let i = 0; i < n; i++) {
      const x = nums[i]

      if ((x & target) === target) {
        // 如果x已经包含了target的所有1位，不需要操作
        ops[i] = 0
      } else {
        // 找到从高位到低位第一个target是1而x是0的位
        let j = 0
        let tempTarget = target
        let tempX = x

        // 找到第一个差异位
        while (tempTarget > 0) {
          if ((tempTarget & 1) === 1 && (tempX & 1) === 0) {
            j = Math.max(j, 1)
          }
          tempTarget >>= 1
          tempX >>= 1
          if (tempTarget === 0 && tempX === 0) break
        }

        // 更高效的找差异位的方法
        let diff = target & ~x
        if (diff === 0) {
          ops[i] = 0
        } else {
          // 找到最高位的差异位
          let highestDiffBit = 0
          while (diff > 0) {
            highestDiffBit++
            diff >>= 1
          }

          // 计算需要增加到的最小值
          // 我们需要构造一个数，使得它>=target且与target在j位以上相同
          let needed = 0
          let mask = 0

          // 简单计算：如果x < target，需要加到target
          if (x < target) {
            needed = target - x
          } else {
            // 如果x > target，需要找到最小的y>=target，使得y & (1<<bit)==1
            // 且y在bit位以上的部分与x相同
            let y = x
            // 清除低位
            let clearMask = ~((1 << highestDiffBit) - 1)
            y &= clearMask
            // 设置目标位
            y |= 1 << (highestDiffBit - 1)
            // 设置更低位的1
            y |= ((1 << (highestDiffBit - 1)) - 1) & target

            needed = y - x
          }

          ops[i] = needed
        }
      }
    }

    // 贪心选择操作次数最小的m个数字
    const sortedOps = [...ops].sort((a, b) => a - b)

    // 计算前m个最小操作次数的和
    let totalOps = 0
    for (let i = 0; i < m; i++) {
      totalOps += sortedOps[i]
    }

    // 如果总操作次数不超过k，则可以设置该位为1
    if (totalOps <= k) {
      ans = candidate
    }
  }

  return ans
}
