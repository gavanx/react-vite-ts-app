var countBadPairs = function (nums) {
  const map = new Map()
  const comb = (n) => {
    let res = 0
    for (let i = 1; i < n; i++) {
      res += i
    }
    return res
  }
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i] - i
    map.set(v, (map.get(v) || 0) + 1)
  }
  let ans = comb(nums.length - 1)
  for (const [k, v] of map) {
    if (v > 1) {
      ans -= comb(v - 1)
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
  { args: [[4, 1, 3, 3]], expected: 5, comment: '// 输入：nums = [4,1,3,3]  输出：5' },
  { args: [[1, 2, 3, 4, 5]], expected: 0, comment: '// 输入：nums = [1,2,3,4,5]  输出：0' },
]

__lcRunExamples(countBadPairs, __lcExamples)
