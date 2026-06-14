var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const visited = new Array(n).fill(false)
  const dfs = (i) => {
    visited[i] = true
    for (let j = 0; j < n; j++) {
      if (!visited[j] && isConnected[i][j]) {
        dfs(j)
      }
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      ans += 1
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
  {
    args: [
      [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
    ],
    expected: 2,
    comment: '// 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]  输出：2',
  },
  {
    args: [
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    ],
    expected: 3,
    comment: '// 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]  输出：3',
  },
]

__lcRunExamples(findCircleNum, __lcExamples)
