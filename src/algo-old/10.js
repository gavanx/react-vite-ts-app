var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dfs = (i, j) => {
    if (i == m && j == n) {
      return true
    }
    if (j == n) {
      return false
    }
    if (i == m) {
      if (p[j] == '*') {
        return dfs(i, j + 1)
      } else if (p[j + 1] == '*') {
        return dfs(i, j + 2)
      } else {
        return false
      }
    }
    let res = false
    if (s[i] == p[j] || p[j] == '.') {
      res = dfs(i + 1, j + 1)
    } else if (p[j] == '*') {
      if (p[j - 1] == s[i] || p[j - 1] == '.') {
        res = dfs(i + 1, j) || dfs(i, j + 1)
      } else {
        res = dfs(i, j + 1)
      }
    } else if (p[j + 1] == '*') {
      res = dfs(i, j + 2)
    }
    return res
  }
  return dfs(0, 0)
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('mississippi', 'mis*is*p*.'))
console.log(isMatch('a', 'ab*')) // true
console.log(isMatch('aaa', 'ab*a')) // false
console.log(isMatch('bbbba', '.*a*a')) // true
