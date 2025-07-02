var minimumDeletions = function (word, k) {
  let cnt = []
  let i
  for (let i = 0; i < word.length; i++) {
    i = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (cnt[i] === undefined) {
      cnt[i] = 0
    }
    cnt[i]++
  }
  let ans = Infinity 
}
