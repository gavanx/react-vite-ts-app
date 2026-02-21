var minimumSum = function (nums) {
  const n = nums.length
  const pre = new Array(n).fill(Infinity)
  const suf = new Array(n).fill(Infinity)
  for (let i = 1; i < n; i++) {
    pre[i] = Math.min(pre[i - 1], nums[i - 1])
    suf[n - i - 1] = Math.min(suf[n - i], nums[n - i])
  }
  let ans = Infinity
  for (let i = 1; i < n - 1; i++) {
    if (pre[i] < nums[i] && suf[i] < nums[i]) {
      ans = Math.min(ans, pre[i] + nums[i] + suf[i])
    }
  }
  return ans === Infinity ? -1 : ans
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
  { args: [[8, 6, 1, 5, 3]], expected: 9, comment: '// 输入：nums = [8,6,1,5,3]  输出：9' },
  {
    args: [[5, 4, 8, 7, 10, 2]],
    expected: 13,
    comment: '// 输入：nums = [5,4,8,7,10,2]  输出：13',
  },
  { args: [[6, 5, 4, 3, 4, 5]], expected: -1, comment: '// 输入：nums = [6,5,4,3,4,5]  输出：-1' },
]

__lcRunExamples(minimumSum, __lcExamples)
