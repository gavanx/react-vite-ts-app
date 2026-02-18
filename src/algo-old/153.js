var findMin = function (nums) {
  let ans = Infinity
  const dfs = (l, r) => {
    if (l >= r) {
      return
    }
    const mid = Math.floor((l + r) / 2)
    ans = Math.min(ans, nums[mid])
    dfs(l, mid)
    dfs(mid + 1, r)
  }
  dfs(0, nums.length)
  return ans
}
console.log(findMin([1]))
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
  { args: [[3, 4, 5, 1, 2]], expected: 1, comment: '// 输入：nums = [3,4,5,1,2]  输出：1' },
  {
    args: [[4, 5, 6, 7, 0, 1, 2]],
    expected: 0,
    comment: '// 输入：nums = [4,5,6,7,0,1,2]  输出：0',
  },
  { args: [[11, 13, 15, 17]], expected: 11, comment: '// 输入：nums = [11,13,15,17]  输出：11' },
]

__lcRunExamples(findMin, __lcExamples)
