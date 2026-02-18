var almostPalindromic = function (s) {
  const isP = (s) => {
    let i = 0
    let j = s.length - 1
    while (i < j) {
      if (s[i++] !== s[j--]) {
        return false
      }
    }
    return true
  }
  let ans = 1
  const memo = new Map()
  const dfs = (i, j) => {
    if (i >= j) {
      return
    }
    if (j - i < ans) {
      return
    }
    if (memo.has(i + ',' + j)) {
      return memo.get(i + ',' + j)
    }
    for (let k = i; k <= j; k++) {
      const str = s.slice(i, k) + s.slice(k + 1, j + 1)
      if (isP(str)) {
        ans = Math.max(ans, j - i + 1)
        memo.set(i + ',' + j, ans)
        break
      }
    }
    dfs(i + 1, j)
    dfs(i, j - 1)
  }
  dfs(0, s.length - 1)
  return ans
}

// console.log(almostPalindromic('abca'))
// console.log(almostPalindromic('abba'))
// console.log(almostPalindromic('zzabba'))
console.log(almostPalindromic('llllllrrlrlllrrlrrrrlllrllrllrrrrrrlrlrlrrrllrrllrrrrllllrllrrrrllllll'))

console.log('xxxxxxx')