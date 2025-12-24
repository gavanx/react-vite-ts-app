var minDeletionSize = function (strs) {
  const n = strs.length
  const m = strs[1].length
  let ans = 0
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n - 1; i++) {
      if (strs[i][j] > strs[i + 1][j]) {
        ans += 1
        break
      }
    }
  }
  return ans
}

console.log(minDeletionSize(["cba", "daf", "ghi"]))
