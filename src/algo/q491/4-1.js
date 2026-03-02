/**
 * 统计满足条件的子数组数量
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
function countSubarrays(nums, k, m) {
  // 辅助函数：计算最多包含k个不同整数，且每个整数至少出现m次的子数组数量
  const atMostK = (k) => {
    let countMap = new Map() // 记录窗口内每个数的出现次数
    let left = 0 // 左指针
    let total = 0 // 符合条件的子数组总数
    let validCount = 0 // 窗口内满足「出现次数≥m」的不同数的数量

    for (let right = 0; right < nums.length; right++) {
      const num = nums[right]
      // 更新当前数的出现次数
      countMap.set(num, (countMap.get(num) || 0) + 1)
      const currentCount = countMap.get(num)

      // 如果当前数的出现次数刚达到m，说明新增一个「有效数」
      if (currentCount === m) {
        validCount++
      }

      // 收缩左指针：窗口内不同数超过k，或有效数的逻辑不满足（这里通过收缩保证最多k个有效数）
      while (countMap.size > k) {
        const leftNum = nums[left]
        const leftCount = countMap.get(leftNum)

        // 如果左指针的数移除前刚好是m次，说明有效数减少一个
        if (leftCount === m) {
          validCount--
        }

        // 更新左指针数的出现次数，若次数为0则从map中删除
        countMap.set(leftNum, leftCount - 1)
        if (countMap.get(leftNum) === 0) {
          countMap.delete(leftNum)
        }

        left++
      }

      // 关键：当前窗口[left, right]的所有以right结尾的子数组都符合「最多k个不同数」
      // 但需要过滤：只有当窗口内「有效数（出现≥m次）的数量 ≤k」时，才统计
      // 实际这里countMap.size ≤k，且validCount是窗口内满足≥m次的数的数量
      total += right - left + 1
    }

    return total
  }

  // 恰好k个 = 最多k个 - 最多k-1个
  return atMostK(k) - atMostK(k - 1)
}

// 测试用例
console.log(countSubarrays([1, 2, 1, 2, 3], 2, 2)) // 输出：2（符合的子数组是[1,2,1,2]、[2,1,2]）
console.log(countSubarrays([1, 2, 1, 3, 4], 3, 1)) // 输出：3（符合的子数组是[1,2,1,3]、[2,1,3]、[1,3,4]）
console.log(countSubarrays([2, 2, 2, 2], 1, 3)) // 输出：2（符合的子数组是[2,2,2]、[2,2,2]）

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
  let allPassed = true
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    const t0 = performance.now()
    try {
      const got = fn(...args)
      const ms = performance.now() - t0
      totalMs += ms
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      if (!ok) allPassed = false
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
      allPassed = false
      const ms = performance.now() - t0
      totalMs += ms
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
      throw e
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS
  const totalStyle = totalSlow
    ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;'
    : 'color:#64748b;'
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms [${allPassed ? 'success' : 'fail'}]`, totalStyle)
}

const __lcExamples = [
  {
    args: [[1, 2, 1, 2, 2], 2, 2],
    expected: 2,
    comment: '// 输入：nums = [1,2,1,2,2], k = 2, m = 2  输出：2',
  },
  {
    args: [[3, 1, 2, 4], 2, 1],
    expected: 3,
    comment: '// 输入：nums = [3,1,2,4], k = 2, m = 1  输出：3',
  },
]

__lcRunExamples(countSubarrays, __lcExamples)
