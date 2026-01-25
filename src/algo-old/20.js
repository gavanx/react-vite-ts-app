var isValid = function (s) {
  const stack = []
  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else {
      if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
      } else if (char === ']' && stack[stack.length - 1] === '[') {
        stack.pop()
      } else if (char === '}' && stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
