var consecutiveSetBits = function (n) {
  const s = n.toString(2)
  let flag = false
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1] && s[i] === '1') {
      if (flag) {
        return false
      } else {
        flag = true
      }
    }
  }
  return flag
}
console.log(consecutiveSetBits(12))