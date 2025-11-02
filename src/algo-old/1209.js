var removeDuplicates = function (s, k) {
  const n = s.length
  const a = []
  for (let i = 0; i < n; i++) {
    if (a.length === 0 || a[a.length - 1][0] !== s[i]) {
      a.push([s[i], 1])
    } else {
      a[a.length - 1][1]++
      if (a[a.length - 1][1] === k) {
        a.pop()
      }
    }
  }
  return a.map((v) => new Array(v[1]).fill(v[0]).join('')).join('')
}

console.log(removeDuplicates('abcd', 2) === 'abcd')
console.log(removeDuplicates('deeedbbcccbdaa', 3) === 'aa')
console.log(removeDuplicates('pbbcggttciiippooaais', 2) === 'ps')
