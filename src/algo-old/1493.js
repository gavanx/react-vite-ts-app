var longestSubarray = function (nums) {
  let i = 0 // 第1个1的位置
  let z = -1 // 要删除的0的位置
  let ans = 0
  while (nums[i] === 0) {
    i++
  }
  if (i < nums.length) {
    ans = 1
  }
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] === 0) {
      //当前是0
      if (z >= i) {
        //第2个0
        i = z + 1 //开始位置放到第1个0后面
        z = j
      } else {
        // 第1个0
        z = j
      }
    }
    let next = j - i
    if (z < i && next + 1 < nums.length) {
      next++
    }
    ans = Math.max(ans, next)
  }
  return ans
}
// console.log(longestSubarray([0, 0, 1, 1])) // 2
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

// __lcRunExamples(longestSubarray, __lcExamples)
