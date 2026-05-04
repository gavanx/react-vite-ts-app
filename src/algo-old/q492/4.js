var minCost = function (s, encCost, flatCost) {
  s = s.split('').map((v) => Number(v))
  const dfs = (s, i, j) => {
    let len = j - i + 1
    let self
    let x = s.slice(i, j + 1).filter((v) => v === 1).length
    if (x === 0) {
      self = flatCost
    } else {
      self = len * x * encCost
    }

    if (len >= 2 && len % 2 === 0) {
      len /= 2
      self = Math.min(self, dfs(s, i, i + len - 1) + dfs(s, i + len, j))
    }
    return self
  }
  return dfs(s, 0, s.length - 1)
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
    args: ['1010', 2, 1],
    expected: 6,
    comment: '// 输入：s = "1010", encCost = 2, flatCost = 1  输出：6',
  },
  {
    args: ['1010', 3, 10],
    expected: 12,
    comment: '// 输入：s = "1010", encCost = 3, flatCost = 10  输出：12',
  },
  {
    args: ['00', 1, 2],
    expected: 2,
    comment: '// 输入：s = "00", encCost = 1, flatCost = 2  输出：2',
  },
]

__lcRunExamples(minCost, __lcExamples)
