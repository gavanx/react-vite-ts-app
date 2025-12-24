var minDeletionSize = function (strs) {
  const m = strs.length
  const n = strs[0].length
  let deleteCount = 0

  for (let col = 0; col < n; col++) {
    let flag = true
    for (let row = 1; row < m; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        deleteCount++
        flag = false
        break
      } else if (strs[row][col] === strs[row - 1][col]) {
        flag = false
      }
    }
    if (flag) break
  }

  return deleteCount
}

console.log(minDeletionSize(['cba', 'daf', 'ghi']))
console.log(minDeletionSize(['a', 'b']))
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']))
console.log(minDeletionSize(['xc', 'yb', 'za']))
console.log(minDeletionSize(['xga', 'xfb', 'yfa']))
