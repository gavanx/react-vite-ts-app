/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length
  const m = strs[0].length
  const current = new Array(n).fill('')
  let deletions = 0

  for (let j = 0; j < m; j++) {
    let canKeep = true
    for (let i = 0; i < n - 1; i++) {
      const str1 = current[i] + strs[i][j]
      const str2 = current[i + 1] + strs[i + 1][j]
      if (str1 > str2) {
        canKeep = false
        break
      }
    }

    if (canKeep) {
      for (let i = 0; i < n; i++) {
        current[i] += strs[i][j]
      }
    } else {
      deletions++
    }
  }

  return deletions
}

console.log(minDeletionSize(['cba', 'daf', 'ghi']))
console.log(minDeletionSize(['a', 'b']))
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']))
console.log(minDeletionSize(['xc', 'yb', 'za']))
console.log(minDeletionSize(['xga', 'xfb', 'yfa']))
