import { MinPriorityQueue } from 'datastructures-js'

var maximumProduct = function (nums, k) {
  const MOD = 10 ** 9 + 7
  const q = new MinPriorityQueue()
  for (const v of nums) {
    q.enqueue(v)
  }
  for (let i = 0; i < k; i++) {
    q.enqueue(q.dequeue() + 1)
  }
  let ans = 1
  q.toArray().forEach((v) => (ans = (ans * v) % MOD))
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
  { args: [[0, 4], 5], expected: 20, comment: '// 输入：nums = [0,4], k = 5  输出：20' },
  {
    args: [[6, 3, 3, 2], 2],
    expected: 216,
    comment: '// 输入：nums = [6,3,3,2], k = 2  输出：216',
  },
]

__lcRunExamples(maximumProduct, __lcExamples)
