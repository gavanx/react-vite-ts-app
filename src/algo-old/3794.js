var reversePrefix = function (s, k) {
  s = s.split('')
  let t
  for (let i = 0; i < Math.floor(k / 2); i++) {
    t = s[i]
    s[i] = s[k - i - 1]
    s[k - i - 1] = t
  }
  return s.join('')
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
  { args: ['abcd', 2], expected: 'bacd', comment: '// 输入：s = "abcd", k = 2  输出：bacd' },
  { args: ['xyz', 3], expected: 'zyx', comment: '// 输入：s = "xyz", k = 3  输出：zyx' },
  { args: ['hey', 1], expected: 'hey', comment: '// 输入：s = "hey", k = 1  输出：hey' },
]

__lcRunExamples(reversePrefix, __lcExamples)
