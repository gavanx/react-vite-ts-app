var findMaximumXOR = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ans = Math.max(ans, nums[i] ^ nums[j])
    }
  }
  return ans
}

function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(
        `%c${i + 1} ${ok ? 'OK' : 'FAIL'}`,
        color,
        { got: gotOut, expected: expectedOut },
        `
`
      )
    } catch (e) {
      console.log(
        `%c${i + 1} ERROR`,
        'color: #dc2626; font-weight: 700;',
        { error: String(e) },
        `
`
      )
      throw e
    }
  }
}

const __lcExamples = [
  {
    args: [[3, 10, 5, 25, 2, 8]],
    expected: 28,
    comment: '// 输入：nums = [3,10,5,25,2,8]  输出：28',
  },
  {
    args: [[14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]],
    expected: 127,
    comment: '// 输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]  输出：127',
  },
]

__lcRunExamples(findMaximumXOR, __lcExamples)
