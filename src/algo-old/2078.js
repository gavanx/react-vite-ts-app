var maxDistance = function (colors) {
  const map = new Map()
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i]
    if (map.has(c)) {
      map.get(c).push(i)
    } else {
      map.set(c, [i])
    }
  }
  let ans = 0
  for (let [c1, arr1] of map) {
    for (let [c2, arr2] of map) {
      if (c1 !== c2) {
        for (const i of arr1) {
          for (const j of arr2) {
            ans = Math.max(ans, Math.abs(i - j))
          }
        }
      }
    }
  }
  return ans
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
    args: [[1, 1, 1, 6, 1, 1, 1]],
    expected: 3,
    comment: '// 输入：colors = [1,1,1,6,1,1,1]  输出：3',
  },
  { args: [[1, 8, 3, 8, 3]], expected: 4, comment: '// 输入：colors = [1,8,3,8,3]  输出：4' },
  { args: [[0, 1]], expected: 1, comment: '// 输入：colors = [0,1]  输出：1' },
]

__lcRunExamples(maxDistance, __lcExamples)
