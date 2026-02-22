var binaryGap = function (n) {
  const s = n.toString(2)
  let ans = 0
  let cnt = -1
  for (const c of s) {
    if (c === '1') {
      if (cnt >= 0) {
        ans = Math.max(ans, cnt + 1)
      }
      cnt = 0
    } else {
      cnt++
    }
  }
  return ans
}

console.log(binaryGap(6))

function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(
        `%c${i + 1} ${ok ? 'OK' : 'FAIL'}`,
        color,
        { got: gotOut, expected: expectedOut },
        `
`
      )
    } catch (e) {
      console.log(
        `%c${i + 1} ERROR`,
        'color: #dc2626; font-weight: 700;',
        { error: String(e) },
        `
`
      )
      throw e
    }
  }
}

const __lcExamples = [
  { args: [22], expected: 2, comment: '// 输入：n = 22  输出：2' },
  { args: [8], expected: 0, comment: '// 输入：n = 8  输出：0' },
  { args: [5], expected: 2, comment: '// 输入：n = 5  输出：2' },
]

__lcRunExamples(binaryGap, __lcExamples)
