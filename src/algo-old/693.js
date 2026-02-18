var hasAlternatingBits = function (n) {
  const b = n.toString(2)
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== (i % 2 === 0 ? '1' : '0')) {
      return false
    }
  }
  return true
}

function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
    }
  }
}

const __lcExamples = [
  { args: [5], expected: true, comment: '// 输入：n = 5  输出：true' },
  { args: [7], expected: false, comment: '// 输入：n = 7  输出：false' },
  { args: [11], expected: false, comment: '// 输入：n = 11  输出：false' },
]

__lcRunExamples(hasAlternatingBits, __lcExamples)
