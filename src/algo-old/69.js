var mySqrt = function (x) {
  let l = 0,
    r = x,
    ans = -1
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    if (mid * mid <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
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
  { args: [4], expected: 2, comment: '// 输入：x = 4  输出：2' },
  { args: [8], expected: 2, comment: '// 输入：x = 8  输出：2' },
]

__lcRunExamples(mySqrt, __lcExamples)
