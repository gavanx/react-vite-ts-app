var findThePrefixCommonArray = function (A, B) {
  const n = A.length
  const s1 = new Set()
  const s2 = new Set()
  const ans = []
  let a, b
  for (let i = 0; i < n; i++) {
    a = A[i]
    b = B[i]
    if (s1.has(a)) {
      s2.add(a)
    } else {
      s1.add(a)
    }
    if (s1.has(b)) {
      s2.add(b)
    } else {
      s1.add(b)
    }
    ans.push(s2.size)
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
    args: [
      [1, 3, 2, 4],
      [3, 1, 2, 4],
    ],
    expected: [0, 2, 3, 4],
    comment: '// 输入：A = [1,3,2,4], B = [3,1,2,4]  输出：[0,2,3,4]',
  },
  {
    args: [
      [2, 3, 1],
      [3, 1, 2],
    ],
    expected: [0, 1, 3],
    comment: '// 输入：A = [2,3,1], B = [3,1,2]  输出：[0,1,3]',
  },
]

__lcRunExamples(findThePrefixCommonArray, __lcExamples)
