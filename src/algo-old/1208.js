var equalSubstring = function (s, t, maxCost) {
  let l = 0,
    sum = 0
  ans = 0
  cost = s.split('').map((c, i) => Math.abs(s.charCodeAt(i) - t.charCodeAt(i)))
  for (let r = 0; r < cost.length; r++) {
    const t = cost[r]
    sum += t
    while (sum > maxCost) {
      sum -= cost[l]
      l++
    }
    ans = Math.max(r - l + 1, ans)
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
  {
    args: ['abcd', 'bcdf', 3],
    expected: 3,
    comment: '// 输入：s = "abcd", t = "bcdf", maxCost = 3  输出：3',
  },
  {
    args: ['abcd', 'cdef', 3],
    expected: 1,
    comment: '// 输入：s = "abcd", t = "cdef", maxCost = 3  输出：1',
  },
  {
    args: ['abcd', 'acde', 0],
    expected: 1,
    comment: '// 输入：s = "abcd", t = "acde", maxCost = 0  输出：1',
  },
]

__lcRunExamples(equalSubstring, __lcExamples)
