/**
 * 统计恰好包含 K 个不同整数的子数组数量
 * @param {number[]} A - 输入的整数数组
 * @param {number} K - 目标不同整数的数量
 * @return {number} 满足条件的子数组数量
 */
var subarraysWithKDistinct = function (A, K) {
  // 核心逻辑：恰好K个 = 最多K个 - 最多K-1个
  return atMostKDistinct(A, K) - atMostKDistinct(A, K - 1)
}

/**
 * 辅助函数：计算最多包含 K 个不同整数的子数组数量
 * @param {number[]} A - 输入数组
 * @param {number} K - 不同整数的上限
 * @return {number} 满足条件的子数组总数
 */
function atMostKDistinct(A, K) {
  const len = A.length
  // 替代Java的int[] freq，用对象存储频率更灵活（避免数组长度限制）
  const freq = {}

  let left = 0
  let right = 0
  // [left, right) 区间内不同整数的个数
  let count = 0
  let res = 0

  // 滑动窗口：右指针扩展窗口
  while (right < len) {
    const num = A[right]
    // 如果当前数是首次出现，不同数计数+1
    if (freq[num] === undefined || freq[num] === 0) {
      count++
    }
    // 更新当前数的频率
    freq[num] = (freq[num] || 0) + 1
    right++

    // 当不同数超过K时，收缩左指针
    while (count > K) {
      const leftNum = A[left]
      freq[leftNum]--
      // 如果左指针数的频率变为0，不同数计数-1
      if (freq[leftNum] === 0) {
        count--
      }
      left++
    }

    // 关键：[left, right) 区间的长度就是新增的合法子数组数量
    // 以right-1为结尾的合法子数组数量 = right - left
    res += right - left
  }

  return res
}

// 测试用例验证
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)) // 预期输出：7（恰好2个不同数的子数组数量）
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)) // 预期输出：3
console.log(subarraysWithKDistinct([1, 1, 1, 1], 1)) // 预期输出：10（1+2+3+4=10）

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
    args: [[1, 2, 1, 3, 4], 3],
    expected: 3,
    comment: '// 输入：nums = [1,2,1,3,4], k = 3  输出：3',
  },
  {
    args: [[1, 2, 1, 2, 3], 2],
    expected: 7,
    comment: '// 输入：nums = [1,2,1,2,3], k = 2  输出：7',
  },
]

__lcRunExamples(subarraysWithKDistinct, __lcExamples)
