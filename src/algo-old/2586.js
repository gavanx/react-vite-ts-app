var vowelStrings = function (words, left, right) {
  const a = ['a', 'e', 'i', 'o', 'u']
  let w
  let ans = 0
  for (let i = left; i <= right; i++) {
    w = words[i]
    if (a.indexOf(w[0]) > -1 && a.indexOf(w[w.length - 1]) > -1) {
      ans++
    }
  }
  return ans
}

console.log(vowelStrings(["are", "amy", "u"], 0, 2))