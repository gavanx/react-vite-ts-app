var maxOperations = function (s) {
  const n = s.length
  let res = 0
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      cnt++
    } else {
      if (i > 0 && s[i - 1] === '1') {
        res += cnt
      }
    }
  }
  return res
}

console.log(maxOperations('1001101'))
