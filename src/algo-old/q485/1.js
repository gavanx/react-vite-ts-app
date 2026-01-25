var vowelConsonantScore = function (s) {
  const yuan = ['a', 'e', 'i', 'o', 'u']
  let v = 0,
    c = 0
  for (const ch of s) {
    if (yuan.includes(ch)) {
      v++
    } else if (ch >= 'a' && ch <= 'z') {
      c++
    }
  }
  if (c > 0) {
    return Math.floor(v / c)
  }
  return 0
}

console.log(vowelConsonantScore('cooear'))
console.log(vowelConsonantScore('axeyizou'))
