var canReach = function (arr, start) {
  const n = arr.length
  const vis = new Array(n).fill(false)
  let q = [start]
  while (q.length > 0) {
    const q2 = []
    for (const i of q) {
      if (!vis[i]) {
        vis[i] = true
        if (arr[i] === 0) {
          return true
        }
        let next = i + arr[i]
        if (next < n && !vis[next]) {
          q2.push(next)
        }
        next = i - arr[i]
        if (next >= 0 && !vis[next]) {
          q2.push(next)
        }
      }
    }
    q = q2
  }
  return false
}

console.log(canReach([3, 0, 2, 1, 2], 2))

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
    args: [[4, 2, 3, 0, 3, 1, 2], 5],
    expected: true,
    comment: '// 输入：arr = [4,2,3,0,3,1,2], start = 5  输出：true',
  },
  {
    args: [[4, 2, 3, 0, 3, 1, 2], 0],
    expected: true,
    comment: '// 输入：arr = [4,2,3,0,3,1,2], start = 0  输出：true',
  },
  {
    args: [[3, 0, 2, 1, 2], 2],
    expected: false,
    comment: '// 输入：arr = [3,0,2,1,2], start = 2  输出：false',
  },
]

__lcRunExamples(canReach, __lcExamples)
