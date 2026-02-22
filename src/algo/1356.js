var sortByBits = function (arr) {
  const arr2 = arr.map((v) => [
    v
      .toString(2)
      .split('')
      .filter((i) => i === '1').length,
    v,
  ])
  return arr2
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1]
      } else {
        return a[0] - b[0]
      }
    })
    .map((a) => a[1])
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
    args: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
    expected: [0, 1, 2, 4, 8, 3, 5, 6, 7],
    comment: '// 输入：arr = [0,1,2,3,4,5,6,7,8]  输出：[0,1,2,4,8,3,5,6,7]',
  },
  {
    args: [[1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]],
    expected: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    comment:
      '// 输入：arr = [1024,512,256,128,64,32,16,8,4,2,1]  输出：[1,2,4,8,16,32,64,128,256,512,1024]',
  },
  {
    args: [[10000, 10000]],
    expected: [10000, 10000],
    comment: '// 输入：arr = [10000,10000]  输出：[10000,10000]',
  },
  {
    args: [[2, 3, 5, 7, 11, 13, 17, 19]],
    expected: [2, 3, 5, 17, 7, 11, 13, 19],
    comment: '// 输入：arr = [2,3,5,7,11,13,17,19]  输出：[2,3,5,17,7,11,13,19]',
  },
  {
    args: [[10, 100, 1000, 10000]],
    expected: [10, 100, 10000, 1000],
    comment: '// 输入：arr = [10,100,1000,10000]  输出：[10,100,10000,1000]',
  },
]

__lcRunExamples(sortByBits, __lcExamples)
