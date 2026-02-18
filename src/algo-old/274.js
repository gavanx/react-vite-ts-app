var hIndex = function (citations) {
  citations = citations.sort((a, b) => b - a)
  let ans = 0
  for (let i = 1; i <= citations.length; i++) {
    if (citations[i - 1] >= i) {
      ans = i
      continue
    }
  }
  return ans
}
console.log(hIndex([1]))
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
  { args: [[3, 0, 6, 1, 5]], expected: 3, comment: '// 输入：citations = [3,0,6,1,5]  输出：3' },
  { args: [[1, 3, 1]], expected: 1, comment: '// 输入：citations = [1,3,1]  输出：1' },
]

__lcRunExamples(hIndex, __lcExamples)
