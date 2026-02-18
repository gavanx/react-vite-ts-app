var maximumSubarraySum = function (nums, k) {
  let ans = 0
  let sum = 0
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (i >= k) {
      const cnt = map.get(nums[i - k])
      if (cnt > 1) {
        map.set(nums[i - k], cnt - 1)
      } else {
        map.delete(nums[i - k])
      }
      sum -= nums[i - k]
    }
    const cnt = map.get(nums[i])
    if (cnt > 0) {
      map.set(nums[i], cnt + 1)
    } else {
      map.set(nums[i], 1)
    }
    sum += nums[i]
    if (i >= k - 1) {
      if (map.size === k) {
        ans = Math.max(ans, sum)
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
    }
  }
}

const __lcExamples = [
  {
    args: [[1, 5, 4, 2, 9, 9, 9], 3],
    expected: 15,
    comment: '// 输入：nums = [1,5,4,2,9,9,9], k = 3  输出：15',
  },
  { args: [[4, 4, 4], 3], expected: 0, comment: '// 输入：nums = [4,4,4], k = 3  输出：0' },
]

__lcRunExamples(maximumSubarraySum, __lcExamples)
