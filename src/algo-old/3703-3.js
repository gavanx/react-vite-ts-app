var removeSubstring = function (s, k) {
  const n = s.length
  const a = [[s[0], 1]]
  let l, r
  for (let i = 1; i < n; i++) {
    if (a.length > 0 && s[i] === a[a.length - 1][0]) {
      a[a.length - 1][1]++
    } else {
      a.push([s[i], 1])
    }
    l = a[a.length - 2]
    r = a[a.length - 1]
    if (l && l[0] === '(' && r[0] === ')' && r[1] >= k) {
      if (l[1] === k) {
        a.length = a.length - 2
      } else if (l[1] > k) {
        l[1] -= k
        a.length = a.length - 1
      }
    }
  }
  return a.map((v) => new Array(v[1]).fill(v[0]).join('')).join('')
}

console.log(removeSubstring('(())', 1) === '')
console.log(removeSubstring('(()(', 1) === '((')
console.log(removeSubstring('((()))()()()', 3) === '()()()')
console.log(removeSubstring('()))', 1) === '))')
console.log(removeSubstring('(()()', 2) === '(()()')
console.log(removeSubstring('(()(()(()))((()', 2) === '(()((()')
console.log(removeSubstring('(()))', 1) === ')')
