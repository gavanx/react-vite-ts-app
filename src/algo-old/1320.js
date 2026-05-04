var minimumDistance = function (word) {
  const location = []
  const cost = new Array(26).fill(0).map(() => new Array(26).fill(0))
  for (let i = 0; i < 26; i++) {
    location[i] = [Math.floor(i / 6), i % 6]
  }
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      cost[i][j] =
        Math.abs(location[i][0] - location[j][0]) + Math.abs(location[i][1] - location[j][1])
    }
  }
  const n = word.length
  const dfs = (i, a, b) => {
    if (i >= n) {
      return 0
    }

    const c = word[i]
    let c1 = a ? cost[a.charCodeAt(0) - 65][c.charCodeAt(0) - 65] : 0
    let c2 = b ? cost[b.charCodeAt(0) - 65][c.charCodeAt(0) - 65] : 0
    return Math.min(dfs(i + 1, c, b) + c1, dfs(i + 1, a, c) + c2)
  }
  return dfs(0, '', '')
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
  { args: ['CAKE'], expected: 3, comment: '// 输入：word = "CAKE  输出：3' },
  { args: ['HAPPY'], expected: 6, comment: '// 输入：word = "HAPPY  输出：6' },
]

__lcRunExamples(minimumDistance, __lcExamples)
