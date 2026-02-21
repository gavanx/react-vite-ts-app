var maxSum = function (nums) {
  const arr = nums.map((n) => Math.max(...n.toString().split('')))
  let ans = -1
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (arr[i] === arr[j]) {
        ans = Math.max(ans, nums[i] + nums[j])
      }
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
      throw e
    }
  }
}

const __lcExamples = [
  {
    args: [[51, 71, 17, 24, 42]],
    expected: 88,
    comment: '// 输入：nums = [51,71,17,24,42]  输出：88',
  },
  { args: [[1, 2, 3, 4]], expected: -1, comment: '// 输入：nums = [1,2,3,4]  输出：-1' },
]

__lcRunExamples(maxSum, __lcExamples)
