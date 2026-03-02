var subarraysWithKDistinct = function (nums, k) {
  function atMostKDistinct(nums, k) {
    const len = nums.length
    const freq = {}

    let left = 0
    let right = 0
    let count = 0
    let res = 0

    while (right < len) {
      const num = nums[right]
      if (freq[num] === undefined || freq[num] === 0) {
        count++
      }
      freq[num] = (freq[num] || 0) + 1
      right++
      while (count > k) { // 不合法则移动left，从不合法移动到合法
        const leftNum = nums[left]
        freq[leftNum]--
        if (freq[leftNum] === 0) {
          count--
        }
        left++
      }
      res += right - left // 越短越合法，中间的才是合法的
    }
    return res
  }
  return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1)
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
