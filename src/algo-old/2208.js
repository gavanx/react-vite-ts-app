import { MaxPriorityQueue } from 'datastructures-js'

var halveArray = function (nums) {
  const q = new MaxPriorityQueue()
  let sum = 0
  for (const v of nums) {
    q.enqueue(v)
    sum += v
  }
  sum /= 2
  let ans = 0
  let minus = 0
  while (minus < sum) {
    const v = q.dequeue() / 2
    minus += v
    q.enqueue(v)
    ans++
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
  { args: [[5, 19, 8, 1]], expected: 3, comment: '// 输入：nums = [5,19,8,1]  输出：3' },
  { args: [[3, 8, 20]], expected: 3, comment: '// 输入：nums = [3,8,20]  输出：3' },
]

__lcRunExamples(halveArray, __lcExamples)
