var isInterleave = function (s1, s2, s3) {
  const m = s1.length
  const n = s2.length
  if (m + n !== s3.length) return false
  let k
  const dfs = (i, j) => {
    if (i == -1 && j == -1) return true
    k = i + j + 1
    let res = false
    if (i >= 0 && s1[i] == s3[k]) {
      res = dfs(i - 1, j)
    }
    if (j >= 0 && s2[j] == s3[k]) {
      res = res || dfs(i, j - 1)
    }
    return res
  }
  return dfs(m - 1, n - 1)
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
console.log(isInterleave('', '', ''))
