var almostPalindromic = function (s) {
  let ans = 1
  const expand = (i) => {
    let c = s[i]
    let left = i - 1
    let right = i + 1
    while (c === s[left]) {
      left--
    }
    while (c === s[right]) {
      right++
    }
    let flag = true
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right] && flag) {
        flag = false
      } else {
        break
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    expand(i)
  }
  return ans
}
