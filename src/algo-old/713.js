var numSubarrayProductLessThanK = function (nums, k) {
  let l = 0,
    ans = 0,
    mul = 1
  for (let r = 0; r < nums.length; r++) {
    mul *= nums[r]
    while (mul >= k) {
      mul /= nums[l]
      l++
    }
    if (mul < k) {
      ans += Math.max(r - l + 1, 0)
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
  {
    args: [[10, 5, 2, 6], 100],
    expected: 8,
    comment: '// 输入：nums = [10,5,2,6], k = 100  输出：8',
  },
  { args: [[1, 2, 3], 0], expected: 0, comment: '// 输入：nums = [1,2,3], k = 0  输出：0' },
]

__lcRunExamples(numSubarrayProductLessThanK, __lcExamples)
