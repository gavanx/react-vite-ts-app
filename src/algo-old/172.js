var trailingZeroes = function (n) {
  let five = 0
  let t
  while (n > 1) {
    t = n
    while (t > 0 && t % 5 === 0) {
      five++
      t = t / 5
    }
    n--
  }
  return five
}
console.log(trailingZeroes(30))
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
  { args: [3], expected: 0, comment: '// 输入：n = 3  输出：0' },
  { args: [5], expected: 1, comment: '// 输入：n = 5  输出：1' },
  { args: [0], expected: 0, comment: '// 输入：n = 0  输出：0' },
]

__lcRunExamples(trailingZeroes, __lcExamples)
