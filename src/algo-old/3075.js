var maximumHappinessSum = function (happiness, k) {
  const n = happiness.length
  let maxSum = 0
  happiness.sort((a, b) => b - a)

  const dfs = (index, currentSum, selectedCount) => {
    if (selectedCount === k) {
      maxSum = Math.max(maxSum, currentSum)
      return
    }
    if (index >= n) return
    dfs(index + 1, currentSum + Math.max(0, happiness[index] - selectedCount), selectedCount + 1)
    dfs(index + 1, currentSum, selectedCount)
  }

  dfs(0, 0, 0)
  return maxSum
}

console.log(maximumHappinessSum([1, 2, 3], 2)) // 4
console.log(maximumHappinessSum([1, 1, 1, 1], 2)) // 1
console.log(maximumHappinessSum([2, 3, 4, 5], 1)) // 5
console.log(maximumHappinessSum([12, 1, 42], 3)) // 53
