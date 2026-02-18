/**
 *
 * source -> target n长度
 * original -> changed, cost 成本
 *
 * cost[j]=z,ori[j]=x,chan[j]=y
 * x -> y，成本z
 */

var minimumCost = function (source, target, original, changed, cost) {
  const len = 26
  const n = original.length
  const m = source.length
  const dist = Array.from({ length: len }, () => Array(len).fill(Infinity))
  for (let i = 0; i < len; i++) {
    dist[i][i] = 0
  }
  for (let k = 0; k < n; k++) {
    const i = original[k].charCodeAt() - 97
    const j = changed[k].charCodeAt() - 97
    dist[i][j] = Math.min(dist[i][j], cost[k])
  }
  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      if (dist[i][k] === Infinity) {
        continue
      }
      for (let j = 0; j < len; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
      }
    }
  }
  let ans = 0,
    tmp
  for (let i = 0; i < m; i++) {
    tmp = dist[source[i].charCodeAt() - 97][target[i].charCodeAt() - 97]
    if (tmp === Infinity) {
      return -1
    }
    ans += tmp
  }
  return ans
}

console.log(
  minimumCost(
    'abcd',
    'acbe',
    ['a', 'b', 'c', 'c', 'e', 'd'],
    ['b', 'c', 'b', 'e', 'b', 'e'],
    [2, 5, 5, 1, 2, 20]
  )
)
