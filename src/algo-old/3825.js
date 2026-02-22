var longestSubsequence = function (nums) {
  const a = nums.map(n => `${n} -> ` + n.toString(2))
  const n = nums.length
  const dp = new Array(n)
  dp[0] = [nums[0] > 0 ? 1 : 0, nums[0]]
  for (let i = 1; i < n; i++) {
    dp[i] = [nums[i] > 0 ? 1 : 0, nums[i]]
    if (nums[i] > 0) {
      for (let j = i - 1; j >= 0; j--) {
        if ((nums[i] & dp[j][1]) != 0 && nums[i] > nums[j]) {
          if (dp[i][0] < dp[j][0] + 1) {
            dp[i][0] = dp[j][0] + 1
            dp[i][1] = nums[i] & dp[j][1]
          }
        }
      }
    }
  }
  let ans = 1
  for (let i = 0; i < n; i++) {
    if (dp[i][1] > 0) {
      ans = Math.max(ans, dp[i][0])
    }
  }
  return ans
}
console.log(longestSubsequence([6, 8, 38, 40, 48, 28, 4])) // 3
console.log(longestSubsequence([6, 0])) //1
console.log(longestSubsequence([2, 3, 6])) //3

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
  { args: [[5, 4, 7]], expected: 2, comment: '// 输入：nums = [5,4,7]  输出：2' },
  { args: [[2, 3, 6]], expected: 3, comment: '// 输入：nums = [2,3,6]  输出：3' },
  { args: [[0, 1]], expected: 1, comment: '// 输入：nums = [0,1]  输出：1' },
]

__lcRunExamples(longestSubsequence, __lcExamples)
