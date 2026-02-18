var singleNumber = function (nums) {
  const m = new Map()
  for (const x of nums) {
    m.set(x, (m.get(x) || 0) + 1)
  }
  for (const [k, v] of m) {
    if (v === 1) {
      return k
    }
  }
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
  { args: [[2, 2, 3, 2]], expected: 3, comment: '// 输入：nums = [2,2,3,2]  输出：3' },
  {
    args: [[0, 1, 0, 1, 0, 1, 99]],
    expected: 99,
    comment: '// 输入：nums = [0,1,0,1,0,1,99]  输出：99',
  },
]

__lcRunExamples(singleNumber, __lcExamples)
