var totalWaviness = function (num1, num2) {
  const low = String(num1)
    .split('')
    .map((v) => Number(v))
  const high = String(num2)
    .split('')
    .map((v) => Number(v))
  const n = high.length
  const diff = n - low.length
  const dfs = (i, w, cmp, d, l, h) => {
    if (i === n) {
      return w
    }
    const lo = l && i >= diff ? low[i - diff] : 0
    const hi = h ? high[i] : 9

    let res = 0
    let isNum = !l || i > diff
    for (let j = lo; j <= hi; j++) {
      let c = isNum ? (j > d) - (j < d) : 0
      let w2 = w
      if (c * cmp < 0) {
        w2 += 1
      }
      res += dfs(i + 1, w2, c, j, l && j === lo, h && j === hi)
    }
    return res
  }
  return dfs(0, 0, 0, 0, true, true)
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
  { args: [120, 130], expected: 3, comment: '// 输入：num1 = 120, num2 = 130  输出：3' },
  { args: [198, 202], expected: 3, comment: '// 输入：num1 = 198, num2 = 202  输出：3' },
  { args: [4848, 4848], expected: 2, comment: '// 输入：num1 = 4848, num2 = 4848  输出：2' },
]

__lcRunExamples(totalWaviness, __lcExamples)
