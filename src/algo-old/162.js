var findPeakElement = function (nums) {
  let max = -Infinity
  let ans = -1
  const dfs = (l, r) => {
    if (l >= r) {
      return
    }
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] > max) {
      ans = mid
      max = nums[mid]
    }
    dfs(l, mid)
    dfs(mid + 1, r)
  }
  dfs(0, nums.length)
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
  { args: [[1, 2, 3, 1]], expected: 2, comment: '// 输入：nums = [1,2,3,1]  输出：2' },
  {
    args: [[1, 2, 1, 3, 5, 6, 4]],
    expected: '1 或 5',
    comment: '// 输入：nums = [ 1,2,1,3,5,6,4]  输出：1 或 5',
  },
]

__lcRunExamples(findPeakElement, __lcExamples)
