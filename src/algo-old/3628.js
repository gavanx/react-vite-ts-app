var numOfSubsequences = function (s) {
  const n = s.length
  const nextMap = { L: 'C', C: 'T', T: 'L' }
  let res = 0
  const dfs = (i, next, flag, r) => {
    if (i === n) {
      res = Math.max(res, r)
      return
    }
    dfs(i + 1, next, flag, r)
    const nextR = r + next === 'T' ? 1 : 0
    if (s[i] === next) {
      dfs(i + 1, nextMap[next], flag, nextR)
    } else {
      if (flag) {
        dfs(i, nextMap[next], false, nextR)
      }
    }
  }
  dfs(0, 'L', true, 0)
  return res
}

console.log(numOfSubsequences('LMCT'))
