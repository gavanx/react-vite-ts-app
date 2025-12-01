var isMatch = function (s, p) {
  const ret = s.match(new RegExp(p, 'g'))
  return (ret && ret[0] === s) || false
}

// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('ab', '.*'))
// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('mississippi', 'mis*is*p*.'))
// console.log(isMatch('a', 'ab*')) // true
// console.log(isMatch('aaa', 'ab*a')) // false
// console.log(isMatch('bbbba', '.*a*a')) // true
console.log(isMatch('ab', '.*c')) // false
