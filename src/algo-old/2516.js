var takeCharacters = function (s, k) {
  s = [...s].map((c) => (c === 'a' ? 0 : c === 'b' ? 1 : 2))
  const cnt = new Array(3).fill(0)
  for (const v of s) {
    cnt[v] += 1
  }
  if (cnt[0] < k || cnt[1] < k || cnt[2] < k) {
    return -1
  }
  cnt[0] -= k
  cnt[1] -= k
  cnt[2] -= k
  let l = 0,
    ans = 0
  const cnt2 = new Array(3).fill(0)
  let v
  for (let i = 0; i < s.length; i++) {
    v = s[i]
    cnt2[v] += 1
    while (l <= i && (cnt2[0] > cnt[0] || cnt2[1] > cnt[1] || cnt2[2] > cnt[2])) {
      cnt2[s[l]] -= 1
      l++
    }
    ans = Math.max(ans, i - l + 1)
  }
  return s.length - ans
}

console.log(takeCharacters('abc', 1))

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
    args: ['aabaaaacaabc', 2],
    expected: 8,
    comment: '// 输入：s = "aabaaaacaabc", k = 2  输出：8',
  },
  { args: ['a', 1], expected: -1, comment: '// 输入：s = "a", k = 1  输出：-1' },
]

__lcRunExamples(takeCharacters, __lcExamples)
