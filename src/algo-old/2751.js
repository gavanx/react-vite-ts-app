var survivedRobotsHealths = function (positions, healths, directions) {
  const idx = Array.from({ length: positions.length }, (_, i) => i).sort(
    (i, j) => positions[i] - positions[j]
  )

  const st = []
  for (const i of idx) {
    if (directions[i] === 'R') {
      st.push(i)
      continue
    }
    while (st.length > 0) {
      const j = st[st.length - 1]
      if (healths[j] > healths[i]) {
        healths[i] = 0
        healths[j] -= 1
        break
      }
      if (healths[j] === healths[i]) {
        healths[i] = 0
        healths[j] = 0
        st.pop()
        break
      }
      healths[i] -= 1
      healths[j] = 0
      st.pop()
    }
  }

  return healths.filter((h) => h > 0)
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
    args: [[5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR'],
    expected: [2, 17, 9, 15, 10],
    comment:
      '// 输入：positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR  输出：[2,17,9,15,10]',
  },
  {
    args: [[3, 5, 2, 6], [10, 10, 15, 12], 'RLRL'],
    expected: [14],
    comment:
      '// 输入：positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL  输出：[14]',
  },
  {
    args: [[1, 2, 5, 6], [10, 10, 11, 11], 'RLRL'],
    expected: [],
    comment:
      '// 输入：positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL  输出：[]',
  },
]

__lcRunExamples(survivedRobotsHealths, __lcExamples)
