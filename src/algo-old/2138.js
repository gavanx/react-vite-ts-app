var divideString = function (s, k, fill) {
  const arr = []
  for (let i = 0; i < s.length; i += k) {
    const subStr = s.slice(i, i + k)
    arr.push(subStr.padEnd(k, fill))
  }
  return arr
}

console.log(divideString('abcdefghi', 3, 'x'))
console.log(divideString('abcdefghij', 3, 'x'))
