import { MaxPriorityQueue } from 'datastructures-js'

var minStoneSum = function (piles, k) {
  const q = new MaxPriorityQueue()
  for (const v of piles) {
    q.enqueue(v)
  }
  for (let i = 0; i < k; i++) {
    const v = q.dequeue()
    const v2 = Math.floor(v / 2)
    q.enqueue(v - v2)
  }
  let ans = 0
  q.toArray().forEach((v) => (ans += v))
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
  { args: [[5, 4, 9], 2], expected: 12, comment: '// 输入：piles = [5,4,9], k = 2  输出：12' },
  { args: [[4, 3, 6, 7], 3], expected: 12, comment: '// 输入：piles = [4,3,6,7], k = 3  输出：12' },
]

__lcRunExamples(minStoneSum, __lcExamples)
