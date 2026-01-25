var partitionLabels = function (s) {
  let last = {}
  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i
  }
  let ans = []
  let start = 0,
    end = 0
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]])
    if (i === end) {
      ans.push(end - start + 1)
      start = end + 1
    }
  }
  return ans
}
