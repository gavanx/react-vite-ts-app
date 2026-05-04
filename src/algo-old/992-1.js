var subarraysWithKDistinct = function (nums, k) {
  const n = nums.length
  const map = new Map()
  let l = 0,
    x,
    i1 = 0,
    i2
  let ans = 0
  while (i1 < n) {
    x = nums[i1]
    map.set(x, (map.get(x) || 0) + 1)
    while (map.size > k) {
      x = nums[l]
      if (map.get(x) > 1) {
        map.set(x, map.get(x) - 1)
      } else {
        map.delete(x)
      }
      l++
    }
    if (map.size === k) {
      i2 = i1 + 1
      while (i2 < n && map.has(nums[i2])) {
        i2++
      }
      ans += i2 - i1
      i2 = l + 1
      while (i2 < i1 && map.has(nums[i2])) {
        i2++
      }
      ans += i2 - l - 1
    }
    i1++
  }
  return ans
}

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
