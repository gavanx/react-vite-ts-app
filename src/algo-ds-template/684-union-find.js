var findRedundantConnection = function (edges) {
  const n = edges.length
  const parent = new Array(n + 1).fill(0).map((value, index) => index)
  for (let i = 0; i < n; i++) {
    const edge = edges[i]
    const node1 = edge[0],
      node2 = edge[1]
    if (find(parent, node1) != find(parent, node2)) {
      union(parent, node1, node2)
    } else {
      return edge
    }
  }
  return [0]
}

const union = (parent, index1, index2) => {
  parent[find(parent, index1)] = find(parent, index2)
}

const find = (parent, index) => {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index])
  }
  return parent[index]
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
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    ],
    expected: [2, 3],
    comment: '// 输入：edges = [[1,2], [1,3], [2,3]]  输出：[2,3]',
  },
  {
    args: [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ],
    ],
    expected: [1, 4],
    comment: '// 输入：edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]  输出：[1,4]',
  },
]

__lcRunExamples(findRedundantConnection, __lcExamples)
