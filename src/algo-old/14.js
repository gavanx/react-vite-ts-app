var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0]
  }
  for (let i = 0; i <= 200; i++) {
    let s = strs[0].substring(0, i + 1)
    for (const str of strs) {
      if (!str.startsWith(s)) {
        return str.substring(0, i)
      }
    }
  }
  return strs[0]
}

console.log(longestCommonPrefix(['']))
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']))

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
    args: [['flower', 'flow', 'flight']],
    expected: 'fl',
    comment: '// 输入：strs = ["flower","flow","flight"]  输出：fl',
  },
]

__lcRunExamples(longestCommonPrefix, __lcExamples)
