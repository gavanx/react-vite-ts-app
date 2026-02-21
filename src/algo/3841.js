var palindromePath = function (n, edges, s, queries) {
  const g = new Map()
  for (const [u, v] of edges) {
    const a = g.get(u)
    if (a) {
      a.push(v)
    } else {
      g.set(u, [v])
    }
  }
  const isPalindromeLike = (s) => {
    const map = new Map()
    for (const c of s) {
      map.set(c, (map.get(c) || 0) + 1)
    }
    if (map.size === 1) {
      return true
    }
    let hasOdd = false
    for (const [k, v] of map) {
      if (v % 2 === 1) {
        if (hasOdd) {
          return false
        }
        hasOdd = true
      }
    }
    return true
  }
  let ans = []
  for (const q of queries) {
    let [cmd, u, v] = q.split(' ')
    if (cmd === 'update') {
      s[Number(u)] = v
      // TODO 更新图
    } else {
      u = Number(u)
      v = Number(v)
      const q = [u]
      let str = ''
      while (q.length > 0) {
        const x = q.shift()
        str += s[x]
        if (x === v) {
          ans.push(isPalindromeLike(str))
          break
        } else {
          const a = g.get(x)
          if (a) {
            q.push(...a)
          } else {
            ans.push(false)
            break
          }
        }
      }
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
    args: [
      3,
      [
        [0, 1],
        [1, 2],
      ],
      'aac',
      ['query 0 2', 'update 1 b', 'query 0 2'],
    ],
    expected: [true, false],
    comment:
      '// 输入：n = 3, edges = [[0,1],[1,2]], s = "aac", queries = ["query 0 2","update 1 b","query 0 2"]  输出：[true,false]',
  },
  {
    args: [
      4,
      [
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      'abca',
      ['query 1 2', 'update 0 b', 'query 2 3', 'update 3 a', 'query 1 3'],
    ],
    expected: [false, false, true],
    comment:
      '// 输入：n = 4, edges = [[0,1],[0,2],[0,3]], s = "abca", queries = ["query 1 2","update 0 b","query 2 3","update 3 a","query 1 3"]  输出：[false,false,true]',
  },
]

__lcRunExamples(palindromePath, __lcExamples)
