import { PriorityQueue } from 'datastructures-js'

var maxXor = function (nums, k) {
  const n = nums.length
  if (n === 1) {
    return nums[0]
  }
  const minQ = new PriorityQueue((a, b) => a[0] - b[0])
  const maxQ = new PriorityQueue((a, b) => b[0] - a[0])
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] ^ nums[i]
  }
  let l = 0,
    r = 0,
    x,
    min,
    max,
    ans = -Infinity

  while (r < n) {
    x = nums[r]
    minQ.enqueue([x, r])
    maxQ.enqueue([x, r])

    min = minQ.front()
    max = maxQ.front()
    while (max[0] - min[0] > k) {
      minQ.remove((v) => v[1] === l)
      maxQ.remove((v) => v[1] === l)
      l++
      min = minQ.front()
      max = maxQ.front()
    }
    ans = Math.max(ans, pre[r + 1] ^ pre[l])
    r++
  }
  if (r === n && l < n - 1) {
    r--
    while (l < r) {
      minQ.remove((v) => v[1] === l)
      maxQ.remove((v) => v[1] === l)
      l++
      min = minQ.front()
      max = maxQ.front()
      if (!min || !max) {
        break
      }
      while (max[0] - min[0] > k) {
        minQ.remove((v) => v[1] === l)
        maxQ.remove((v) => v[1] === l)
        l++
        min = minQ.front()
        max = maxQ.front()
      }
      ans = Math.max(ans, pre[r + 1] ^ pre[l])
    }
  }
  return ans
}

console.log(maxXor([5, 4, 5, 6], 2)) //7
console.log(maxXor([3, 4], 1)) // 7
console.log(maxXor([0, 3], 0)) // 3

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
  { args: [[5, 4, 5, 6], 2], expected: 7, comment: '// 输入：nums = [5,4,5,6], k = 2  输出：7' },
  { args: [[5, 4, 5, 6], 1], expected: 6, comment: '// 输入：nums = [5,4,5,6], k = 1  输出：6' },
]

__lcRunExamples(maxXor, __lcExamples)
