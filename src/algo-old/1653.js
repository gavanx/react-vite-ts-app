var minimumDeletions = function (s) {
  let a = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      a++
    }
  }
  let a2 = 0
  let res = a
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      a2++
    }
    res = Math.min(res, i + 1 - a2 + (a - a2))
  }
  return res
}

// console.log(minimumDeletions('aababbab'))
// console.log(minimumDeletions('bbaaaaabb'))
console.log(minimumDeletions('b'))
