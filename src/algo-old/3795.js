var minLength = function (nums, k) {
  let l = 0,
    map = new Map(),
    ans = Infinity,
    sum = 0,
    v
  for (let r = 0; r < nums.length; r++) {
    v = nums[r]
    if (map.has(v)) {
      map.set(v, map.get(v) + 1)
    } else {
      map.set(v, 1)
      sum += v
    }
    while (sum >= k) {
      ans = Math.min(ans, r - l + 1)
      const d = map.get(nums[l])
      if (d > 1) {
        map.set(nums[l], d - 1)
      } else {
        map.delete(nums[l])
        sum -= nums[l]
      }
      l++
    }
  }
  return ans === Infinity ? -1 : ans
}
console.log(minLength([1, 12], 7))
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
  { args: [[2, 2, 3, 1], 4], expected: 2, comment: '// 输入：nums = [2,2,3,1], k = 4  输出：2' },
  { args: [[3, 2, 3, 4], 5], expected: 2, comment: '// 输入：nums = [3,2,3,4], k = 5  输出：2' },
  { args: [[5, 5, 4], 5], expected: 1, comment: '// 输入：nums = [5,5,4], k = 5  输出：1' },
]

__lcRunExamples(minLength, __lcExamples)
