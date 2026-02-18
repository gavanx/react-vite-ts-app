var maxSum = function (nums, m, k) {
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
      if (map.size >= m) {
        ans = Math.max(ans, sum)
      }
    }
  }
  return ans
}

// console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4))
// console.log(maxSum([1, 1, 1, 3], 2, 2))
console.log(maxSum([1, 2, 2], 2, 2))
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
    args: [[2, 6, 7, 3, 1, 7], 3, 4],
    expected: 18,
    comment: '// 输入：nums = [2,6,7,3,1,7], m = 3, k = 4  输出：18',
  },
  {
    args: [[5, 9, 9, 2, 4, 5, 4], 1, 3],
    expected: 23,
    comment: '// 输入：nums = [5,9,9,2,4,5,4], m = 1, k = 3  输出：23',
  },
  {
    args: [[1, 2, 1, 2, 1, 2, 1], 3, 3],
    expected: 0,
    comment: '// 输入：nums = [1,2,1,2,1,2,1], m = 3, k = 3  输出：0',
  },
]

__lcRunExamples(maxSum, __lcExamples)
