var partition = function (s) {
  const n = s.length
  const ans = []
  const isPalindrome = (i, j) => {
    while (j >= i) {
      if (s[i] !== s[j]) {
        return false
      }
      i++
      j--
    }
    return true
  }
  const dfs = (res, i) => {
    if (i >= n) {
      if (res.length > 0) {
        ans.push(res)
      }
    } else {
      for (let j = i; j < n; j++) {
        if (isPalindrome(i, j)) {
          dfs([...res, s.substring(i, j + 1)], j + 1)
        }
      }
    }
  }
  dfs([], 0)
  return ans
}

console.log(partition('aab').join(' '))
console.log(partition('a').join(' '))
