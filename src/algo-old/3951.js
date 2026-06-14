var minEnergy = function (n, brightness, intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  const inter = []
  let last = [-Infinity, -Infinity]
  for (const cur of intervals) {
    if (cur[0] > last[1]) {
      inter.push(cur)
      last = cur
    } else {
      last[1] = Math.max(cur[1], last[1])
    }
  }
  let ans = 0
  for (const [s, e] of inter) {
    ans += e - s + 1
  }
  return ans * Math.ceil(brightness / 3)
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
    args: [5, 5, [[6, 12]]],
    expected: 14,
    comment: '// 输入：n = 5, brightness = 5, intervals = [[6,12]]  输出：14',
  },
  {
    args: [
      2,
      1,
      [
        [0, 0],
        [2, 2],
      ],
    ],
    expected: 2,
    comment: '// 输入：n = 2, brightness = 1, intervals = [[0,0],[2,2]]  输出：2',
  },
  {
    args: [
      4,
      2,
      [
        [1, 3],
        [2, 4],
      ],
    ],
    expected: 4,
    comment: '// 输入：n = 4, brightness = 2, intervals = [[1,3],[2,4]]  输出：4',
  },
]

__lcRunExamples(minEnergy, __lcExamples)
