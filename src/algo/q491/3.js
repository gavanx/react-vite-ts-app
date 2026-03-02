var minimumOR = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m + 1).fill(Infinity).map(() => new Array(n).fill(Infinity))
  dp[0] = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][k] | grid[i][j])
      }
    }
  }
  return Math.min(...dp[m])
}

console.log(minimumOR([[13, 16, 28, 11, 11, 24], [34, 30, 6, 1, 8, 7], [36, 25, 17, 24, 32, 34]]))
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
    args: [
      [
        [1, 5],
        [2, 4],
      ],
    ],
    expected: 3,
    comment: '// 输入：grid = [[1,5],[2,4]]  输出：3',
  },
  {
    args: [
      [
        [3, 5],
        [6, 4],
      ],
    ],
    expected: 5,
    comment: '// 输入：grid = [[3,5],[6,4]]  输出：5',
  },
  { args: [[[7, 9, 8]]], expected: 7, comment: '// 输入：grid = [[7,9,8]]  输出：7' },
]

__lcRunExamples(minimumOR, __lcExamples)
