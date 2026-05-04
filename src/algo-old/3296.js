var minNumberOfSeconds = function (mountainHeight, workerTimes) {
  let l = 0,
    r = 100
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    let sum = mountainHeight
    for (const w of workerTimes) {
      // w * x(x + 1) / 2 = mid
      sum -= Math.floor(Math.pow((mid * 2) / w, 0.5))
      if (sum < 0) {
        break
      }
    }
    if (sum < 0) {
      l = mid
    } else {
      r = mid
    }
  }
  return l
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
    args: [4, [2, 1, 1]],
    expected: 3,
    comment: '// 输入：mountainHeight = 4, workerTimes = [2,1,1]  输出：3',
  },
  {
    args: [10, [3, 2, 2, 4]],
    expected: 12,
    comment: '// 输入：mountainHeight = 10, workerTimes = [3,2,2,4]  输出：12',
  },
  {
    args: [5, [1]],
    expected: 15,
    comment: '// 输入：mountainHeight = 5, workerTimes = [1]  输出：15',
  },
]

__lcRunExamples(minNumberOfSeconds, __lcExamples)
