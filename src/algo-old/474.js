var findMaxForm = function (strs, m, n) {
  let res = 0
  let z, o
  for (const str of strs) {
    z = 0
    o = 0
    for (const c of str) {
      if (c === '0') z++
      else o++
      if (z > m || o > n) {
        break
      }
    }
    if (z <= m && o <= n) {
      res++
    }
  }
  return res
}
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
console.log(findMaxForm(['10', '0', '1'], 1, 1))
