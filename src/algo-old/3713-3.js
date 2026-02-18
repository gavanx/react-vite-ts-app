var longestBalanced = function (s) {
  const cnt = new Map()
  for (let i = 0; i < s.length; i++) {
    cnt.set(s.charCodeAt(i), (cnt.get(s.charCodeAt(i)) || 0) + 1)
  }
  let ans = 1
  const memo = new Map()
  const dfs = (i, j, m) => {
    if (memo.has(`${i}-${j}`)) {
      return memo.get(`${i}-${j}`)
    }
    if (j - i + 1 < ans) {
      return
    }
    if (new Set(m.values()).size === 1) {
      ans = Math.max(ans, j - i + 1)
      memo.set(`${i}-${j}`, ans)
      return
    }
    const m1 = new Map(m)
    const c = m1.get(s.charCodeAt(j))
    if (c === 1) {
      m1.delete(s.charCodeAt(j))
    } else {
      m1.set(s.charCodeAt(j), c - 1)
    }
    dfs(i, j - 1, m1)
    const m2 = new Map(m)
    const c2 = m1.get(s.charCodeAt(i))
    if (c2 === 1) {
      m2.delete(s.charCodeAt(i))
    } else {
      m2.set(s.charCodeAt(i), c2 - 1)
    }
    dfs(i + 1, j, m2)
  }
  dfs(0, s.length - 1, cnt)
  return ans
}

console.log(longestBalanced('abbac'))
console.log(longestBalanced('zzabccy'))
console.log(longestBalanced('aba'))
console.log(longestBalanced('zz'))
