var numberOfStableArrays = function (zero, one, limit) {
  const MOD = 1_000_000_007
  const dfs = (i, j, k) => {
    if (i === 0) {
      return k === 1 && j <= limit ? 1 : 0
    }
    if (j === 0) {
      return k === 0 && i <= limit ? 1 : 0
    }

    if (k === 0) {
      return (
        (dfs(i - 1, j, 0) + dfs(i - 1, j, 1) - (i > limit ? dfs(i - limit - 1, j, 1) : 0)) % MOD
      )
    } else {
      return (
        (dfs(i, j - 1, 0) + dfs(i, j - 1, 1) - (j > limit ? dfs(i, j - limit - 1, 0) : 0)) % MOD
      )
    }
  }
  return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD
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
  { args: [1, 1, 2], expected: 2, comment: '// 输入：zero = 1, one = 1, limit = 2  输出：2' },
  { args: [1, 2, 1], expected: 1, comment: '// 输入：zero = 1, one = 2, limit = 1  输出：1' },
  { args: [3, 3, 2], expected: 14, comment: '// 输入：zero = 3, one = 3, limit = 2  输出：14' },
]

__lcRunExamples(numberOfStableArrays, __lcExamples)
