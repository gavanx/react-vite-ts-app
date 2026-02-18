var longestSubarray = function (nums) {
  let l = 0,
    cnt = 0
  ans = 0
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      cnt += 1
      while (cnt > 1) {
        if (nums[l] === 0) {
          cnt -= 1
        }
        l++
      }
    }
    ans = Math.max(ans, r - l)
  }
  return ans
}

console.log(longestSubarray([0, 0, 1, 1])) // 2
console.log(longestSubarray([0, 0, 1])) // 1
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
    args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]],
    expected: 5,
    comment: '// 输入：nums = [0,1,1,1,0,1,1,0,1]  输出：5',
  },
  { args: [[1, 1, 1]], expected: 2, comment: '// 输入：nums = [1,1,1]  输出：2' },
]

__lcRunExamples(longestSubarray, __lcExamples)
