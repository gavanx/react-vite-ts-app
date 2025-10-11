var removeSubstring = function (s, k) {
  const n = s.length
  let c = []
  let r = []
  for (let i = 0; i < n; i++) {
    if ('(' === s[i]) {
      c.push(s[i])
    } else if (')' === s[i]) {
      if (c.length >= k) {
        c = c.slice(k)
        console.log(c)
      } else {
        if (c.length > 0) {
          r.push(...c)
          c = []
        }
        r.push(')')
      }
    }
  }
  return c.join('') + r.join('')
}

// console.log(removeSubstring('(())', 1))
// console.log(removeSubstring('(()(', 1))
console.log(removeSubstring('((()))()()()', 3))
// console.log(removeSubstring('()))', 1))
