var findMaximumXOR = function (nums) {
  const highBit = 31 - Math.clz32(Math.max(...nums))
  const seen = new Set()
  let ans = 0,
    mask = 0
  for (let i = highBit; i >= 0; i--) {
    // 从最高位开始枚举
    seen.clear()
    mask |= 1 << i
    const newAns = ans | (1 << i) // 这个比特位可以是 1 吗？
    for (let x of nums) {
      x &= mask // 低于 i 的比特位置为 0
      if (seen.has(newAns ^ x)) {
        ans = newAns // 这个比特位可以是 1
        break
      }
      seen.add(x)
    }
  }
  return ans
}

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
  {
    args: [[3, 10, 5, 25, 2, 8]],
    expected: 28,
    comment: '// 输入：nums = [3,10,5,25,2,8]  输出：28',
  },
  {
    args: [[14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]],
    expected: 127,
    comment: '// 输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]  输出：127',
  },
]

__lcRunExamples(findMaximumXOR, __lcExamples)
