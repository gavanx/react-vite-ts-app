var isPalindrome = function (s) {
  const n = s.length
  let left = 0
  let right = n - 1
  const isAlphaNumeric = (c) => {
    const code = c.charCodeAt(0)
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  }
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--
    }
    if (left < right) {
      if (s[left].toLowerCase() === s[right].toLowerCase()) {
        left++
        right--
      } else {
        break
      }
    }
  }
  return left >= right
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome(' '))
console.log(isPalindrome('.,'))
