var mapWordWeights = function (words, weights) {
  let ans = []
  for (let i = 0; i < words.length; i++) {
    let w = 0
    for (const c of words[i]) {
      w += weights[c.charCodeAt(0) - 97]
    }
    ans.push(String.fromCharCode(26 + 97 - w % 26 - 1))
  }
  return ans.join('')
}

console.log(mapWordWeights(["abcd", "def", "xyz"], [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2]))
