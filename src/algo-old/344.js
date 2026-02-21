var reverseString = function (s) {
  let t
  const n = s.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    t = s[i]
    s[i] = s[n - i - 1]
    s[n - i - 1] = t
  }
  return s
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
  {
    args: [['h', 'e', 'l', 'l', 'o']],
    expected: ['o', 'l', 'l', 'e', 'h'],
    comment: '// 输入：s = ["h","e","l","l","o"]  输出：["o","l","l","e","h"]',
  },
  {
    args: [['H', 'a', 'n', 'n', 'a', 'h']],
    expected: ['h', 'a', 'n', 'n', 'a', 'H'],
    comment: '// 输入：s = ["H","a","n","n","a","h"]  输出：["h","a","n","n","a","H"]',
  },
]

__lcRunExamples(reverseString, __lcExamples)
