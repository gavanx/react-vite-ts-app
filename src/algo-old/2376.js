var countSpecialNumbers = function (n) {
  const s = n.toString()
  const m = s.length
  const memo = Array.from({ length: m }, () => Array(1 << 10).fill(-1)) // -1 表示没有计算过
  function dfs(i, mask, isLimit, isNum) {
    if (i === m) {
      return isNum ? 1 : 0 // is_num 为 true 表示得到了一个合法数字
    }
    if (!isLimit && isNum && memo[i][mask] !== -1) {
      return memo[i][mask] // 之前计算过
    }
    let res = 0
    if (!isNum) {
      // 可以跳过当前数位
      res += dfs(i + 1, mask, false, false)
    }
    // 如果前面填的数字都和 n 的一样，那么这一位至多填数字 s[i]（否则就超过 n 啦）
    const up = isLimit ? +s[i] : 9
    // 枚举要填入的数字 d
    // 如果前面没有填数字，则必须从 1 开始（因为不能有前导零）
    for (let d = isNum ? 0 : 1; d <= up; d++) {
      if (((mask >> d) & 1) === 0) {
        // d 不在 mask 中，说明之前没有填过 d
        res += dfs(i + 1, mask | (1 << d), isLimit && d === up, true)
      }
    }
    if (!isLimit && isNum) {
      memo[i][mask] = res // 记忆化
    }
    return res
  }
  return dfs(0, 0, true, false)
}

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
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
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
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
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle)
}

const __lcExamples = [
  { args: [20], expected: 19, comment: '// 输入：n = 20  输出：19' },
  { args: [5], expected: 5, comment: '// 输入：n = 5  输出：5' },
  { args: [135], expected: 110, comment: '// 输入：n = 135  输出：110' },
]

__lcRunExamples(countSpecialNumbers, __lcExamples)
