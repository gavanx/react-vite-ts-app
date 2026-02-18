var nextGreatestLetter = function (letters, target) {
  let ans = 0
  for (const c of letters) {
    if (c > target) {
      if (ans === 0 || ans > c) {
        ans = c
      }
    }
  }
  return ans === 0 ? letters[0] : ans
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'))
