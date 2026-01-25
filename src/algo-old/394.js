var decodeString = function (s) {
  const stack = []
  let currentNum = 0
  let currentStr = ''
  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char)
    } else if (char === '[') {
      stack.push([currentStr, currentNum])
      currentStr = ''
      currentNum = 0
    } else if (char === ']') {
      const [lastStr, num] = stack.pop()
      currentStr = lastStr + currentStr.repeat(num)
    } else {
      currentStr += char
    }
  }
  return currentStr
}

console.log(decodeString('3[a2[c]]')) // accaccacc
console.log(decodeString('2[abc]3[cd]ef')) // abcabccdcdcdef
