var maximumXor = function (s, t) {
  let z = 0
  for (const c of t) {
    if (c === '0') {
      z++
    }
  }
  let one = t.length - z
  let ans = []
  for (const c of s) {
    if (c === '0') {
      if (one > 0) {
        ans.push(1)
        one--
      } else {
        ans.push(0)
      }
    } else {
      if (z > 0) {
        ans.push(1)
        z--
      } else {
        ans.push(0)
      }
    }
  }
  return ans.join('')
}

console.log(maximumXor('101', '011'))
console.log(maximumXor('0110', '1110'))
console.log(maximumXor('0101', '1001')) 
