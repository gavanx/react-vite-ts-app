var maxTotal = function (nums, s) {
  const n = nums.length
  const memo = new Map()
  const dfs = (i, o) => {
    if (i >= n) {
      return 0
    }
    const key = `${i}-${o}`
    if (memo.has(key)) {
      return memo.get(key)
    }
    let res
    if (s[i] === '1') {
      res = nums[i] + dfs(i + 1, i)
      if (i - o > 1 && i > 0) {
        res = Math.max(res, nums[i - 1] + dfs(i + 1, i - 1))
      }
    } else {
      res = dfs(i + 1, o)
    }
    memo.set(key, res)
    return res
  }
  return dfs(0, -1)
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
    args: [[9, 2, 6, 1], '0101'],
    expected: 15,
    comment: '// 输入：nums = [9,2,6,1], s = "0101  输出：15',
  },
  { args: [[5, 1, 4], '001'], expected: 4, comment: '// 输入：nums = [5,1,4], s = "001  输出：4' },
  {
    args: [[9, 3, 5], '011'],
    expected: 14,
    comment: '// 输入：nums = [9,3,5], s = "011  输出：14',
  },
]

__lcRunExamples(maxTotal, __lcExamples)
