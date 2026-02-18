var finalPrices = function (prices) {
  const st = []
  const ans = [...prices]
  for (let i = 0; i < prices.length; i++) {
    while (st.length > 0 && prices[st[st.length - 1]] >= prices[i]) {
      ans[st[st.length - 1]] = prices[st[st.length - 1]] - prices[i]
      st.pop()
    }
    st.push(i)
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
  {
    args: [[8, 4, 6, 2, 3]],
    expected: [4, 2, 4, 2, 3],
    comment: '// 输入：prices = [8,4,6,2,3]  输出：[4,2,4,2,3]',
  },
  {
    args: [[1, 2, 3, 4, 5]],
    expected: [1, 2, 3, 4, 5],
    comment: '// 输入：prices = [1,2,3,4,5]  输出：[1,2,3,4,5]',
  },
  {
    args: [[10, 1, 1, 6]],
    expected: [9, 0, 1, 6],
    comment: '// 输入：prices = [10,1,1,6]  输出：[9,0,1,6]',
  },
]

__lcRunExamples(finalPrices, __lcExamples)
