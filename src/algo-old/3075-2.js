var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a)
  let ans = 0
  let c
  for (let i = 0; i < k; i++) {
    c = happiness[i] - i
    if (c <= 0) break
    ans += c
  }
  return ans
}
console.log(maximumHappinessSum([1, 2, 3], 2)) // 4
console.log(maximumHappinessSum([1, 1, 1, 1], 2)) // 1
console.log(maximumHappinessSum([2, 3, 4, 5], 1)) // 5
console.log(maximumHappinessSum([12, 1, 42], 3)) // 53
