var rangeBitwiseAnd = function (left, right) {
  let ans = right
  for (let i = left; i < right; i++) {
    ans &= i
    if (ans === 0) {
      return 0
    }
  }
  return ans
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
  { args: [5, 7], expected: 4, comment: '// 输入：left = 5, right = 7  输出：4' },
  { args: [0, 0], expected: 0, comment: '// 输入：left = 0, right = 0  输出：0' },
  { args: [1, 2147483647], expected: 0, comment: '// 输入：left = 1, right = 2147483647  输出：0' },
]

__lcRunExamples(rangeBitwiseAnd, __lcExamples)
