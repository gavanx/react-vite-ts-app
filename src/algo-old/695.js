var maxAreaOfIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let ans = 0
  const dfs = (i, j) => {
    visited[i][j] = true
    if (memo[i][j] > 0) {
      return memo[i][j]
    }
    let x, y
    let res = 1
    for (const dir of dirs) {
      x = i + dir[0]
      y = j + dir[1]
      if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y] && grid[x][y] === 1) {
        res += dfs(x, y)
      }
    }
    return (memo[i][j] = res)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        ans = Math.max(ans, dfs(i, j))
      }
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
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
    ],
    expected: 6,
    comment:
      '// 输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]  输出：6',
  },
  {
    args: [[[0, 0, 0, 0, 0, 0, 0, 0]]],
    expected: 0,
    comment: '// 输入：grid = [[0,0,0,0,0,0,0,0]]  输出：0',
  },
]

__lcRunExamples(maxAreaOfIsland, __lcExamples)
