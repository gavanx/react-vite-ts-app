function createDPArrayOpt(zero, one) {
  const len1 = zero + 1
  const len2 = one + 1
  const dp = new Array(len1)
  const defaultItem = [0, 0]

  for (let i = 0; i < len1; i++) {
    const row = new Array(len2)
    for (let j = 0; j < len2; j++) {
      row[j] = [...defaultItem]
    }
    dp[i] = row
  }

  return dp
}
var numberOfStableArrays = function (zero, one, limit) {
  const MOD = 10 ** 9 + 7
  const dp = createDPArrayOpt(zero, one)
  for (let i = 0; i <= Math.min(zero, limit); i++) {
    dp[i][0][0] = 1
  }
  for (let i = 0; i <= Math.min(one, limit); i++) {
    dp[0][i][1] = 1
  }
  dp[0][0][0] = 1
  dp[0][0][1] = 1
  for (let i = 1; i <= zero; i++) {
    for (let j = 1; j <= one; j++) {
      dp[i][j][0] =
        (dp[i - 1][j][0] + dp[i - 1][j][1] - (i > limit ? dp[i - limit - 1][j][1] : 0) + MOD) % MOD
      dp[i][j][1] =
        (dp[i][j - 1][1] + dp[i][j - 1][0] - (j > limit ? dp[i][j - limit - 1][0] : 0) + MOD) % MOD
    }
  }
  return (dp[zero][one][0] + dp[zero][one][1]) % MOD
}

console.log(numberOfStableArrays(1000, 1000, 1000)) // 72475738
console.log(numberOfStableArrays(71, 12, 26)) // 115201918
console.log(numberOfStableArrays(19, 15, 21)) // 855967513

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
