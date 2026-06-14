var findKDistantIndices = function (nums, key, k) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      arr.push(i)
    }
  }

  let last = 0
  let ans = []
  for (const j of arr) {
    const start = Math.max(last, j - k)
    const end = Math.min(j + k, nums.length - 1)
    for (let i = start; i <= end; i++) {
      ans.push(i)
    }
    last = j + k + 1
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
    args: [[3, 4, 9, 1, 3, 9, 5], 9, 1],
    expected: [1, 2, 3, 4, 5, 6],
    comment: '// 输入：nums = [3,4,9,1,3,9,5], key = 9, k = 1  输出：[1,2,3,4,5,6]',
  },
  {
    args: [[2, 2, 2, 2, 2], 2, 2],
    expected: [0, 1, 2, 3, 4],
    comment: '// 输入：nums = [2,2,2,2,2], key = 2, k = 2  输出：[0,1,2,3,4]',
  },
]

__lcRunExamples(findKDistantIndices, __lcExamples)
