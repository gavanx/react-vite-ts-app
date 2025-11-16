var processQueries = function (c, connections, queries) {
  const offline = new Set()
  const cn = new Map()
  for (const [a, b] of connections) {
    if (cn.has(a)) {
      cn.get(a).add(b)
    } else {
      cn.set(a, new Set([b]))
    }
    if (cn.has(b)) {
      cn.get(b).add(a)
    } else {
      cn.set(b, new Set([a]))
    }
  }
  const res = []
  let s
  for (const [t, x] of queries) {
    if (t === 1) {
      if (!offline.has(x)) {
        res.push(x)
      } else if (cn.has(x)) {
        s = [...cn.get(x)].filter((v) => !offline.has(v)).sort((a, b) => a - b)
        if (s.length > 0) {
          res.push(s[0])
          cn.set(x, new Set(s))
        } else {
          cn.delete(x)
          res.push(-1)
        }
      } else {
        res.push(-1)
      }
    } else {
      offline.add(x)
    }
  }
  return res
}

// console.log(
//   processQueries(
//     3,
//     [],
//     [
//       [1, 1],
//       [2, 1],
//       [1, 1],
//     ]
//   )
// )

// console.log(
//   processQueries(
//     5,
//     [
//       [1, 2],
//       [2, 3],
//       [3, 4],
//       [4, 5],
//     ],
//     [
//       [1, 3],
//       [2, 1],
//       [1, 1],
//       [2, 2],
//       [1, 2],
//     ]
//   )
// )

//[2,1,1,1,1,1,1]

console.log(
  processQueries(
    4,
    [
      [4, 3],
      [3, 1],
      [4, 2],
      [3, 2],
      [4, 1],
    ],
    [
      [2, 3],
      [1, 2],
      [2, 4],
      [1, 1],
      [2, 2],
      [1, 2],
      [1, 2],
      [2, 2],
      [1, 3],
      [2, 3],
      [2, 4],
      [2, 3],
      [2, 4],
      [1, 2],
      [1, 1],
    ]
  )
)
