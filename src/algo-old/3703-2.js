var removeSubstring = function (s, k) {
  const n = s.length
  let c = []
  let leftCount = 0
  let rightCount = 0
  for (let i = 0; i < n; i++) {
    if ('(' === s[i]) {
      c.push('(')
      if (rightCount > 0) {
        rightCount = 0
        leftCount = 1
      } else {
        leftCount++
      }
    } else if (')' === s[i]) {
      rightCount++
      if (leftCount >= k && rightCount >= k) {
        c = c.slice(0, c.length - k - k + 1)
        leftCount -= k
        rightCount -= k
        let j = c.length - 1
        if (c[j] === ')') {
          while (j >= 0 && c[j] === ')') {
            j--
            rightCount++
          }
          while (j >= 0 && c[j] === '(') {
            j--
            leftCount++
          }
          if (leftCount < k) {
            leftCount = 0
            rightCount = 0
          }
        }
      } else if (leftCount >= k) {
        c.push(')')
      } else {
        leftCount = 0
        rightCount = 0
        c.push(')')
      }
    }
  }
  return c.join('')
}

// console.log(removeSubstring('(())', 1))
// console.log(removeSubstring('(()(', 1))
// console.log(removeSubstring('((()))()()()', 3))
// console.log(removeSubstring('()))', 1))
// console.log(removeSubstring('(()()', 2))
// console.log(removeSubstring('(()(()(()))((()', 2))
console.log(removeSubstring('(()))', 1))
