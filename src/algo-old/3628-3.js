var numOfSubsequences = function (s) {
  let t = 0
  for (let c of s) {
    if (c == 'T') {
      t++
    }
  }

  let l = 0,
    lc = 0,
    lct = 0,
    c = 0,
    ct = 0,
    lt = 0
  for (let b of s) {
    if (b == 'L') {
      l++
    } else if (b == 'C') {
      lc += l
      c++
    } else if (b == 'T') {
      lct += lc
      ct += c
      t--
    }
    lt = Math.max(lt, l * t)
  }
  return lct + Math.max(ct, lc, lt)
}

console.log(numOfSubsequences('LMCT'))
console.log(numOfSubsequences('LCCT'))
console.log(numOfSubsequences('L'))
