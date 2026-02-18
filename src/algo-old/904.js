var totalFruit = function (fruits) {
  const map = new Map()
  let l = 0,
    ans = 0
  for (let r = 0; r < fruits.length; r++) {
    const f = fruits[r]
    map.set(f, (map.get(f) || 0) + 1)
    while (map.size > 2) {
      const d = fruits[l]
      if (map.get(d) > 1) {
        map.set(d, map.get(d) - 1)
      } else {
        map.delete(d)
      }
      l++
    }
    ans = Math.max(ans, r - l + 1)
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
    }
  }
}

const __lcExamples = [
  { args: [[1, 2, 1]], expected: 3, comment: '// 输入：fruits = [1,2,1]  输出：3' },
  { args: [[0, 1, 2, 2]], expected: 3, comment: '// 输入：fruits = [0,1,2,2]  输出：3' },
  { args: [[1, 2, 3, 2, 2]], expected: 4, comment: '// 输入：fruits = [1,2,3,2,2]  输出：4' },
  {
    args: [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]],
    expected: 5,
    comment: '// 输入：fruits = [3,3,3,1,2,1,1,2,3,3,4]  输出：5',
  },
]

__lcRunExamples(totalFruit, __lcExamples)
