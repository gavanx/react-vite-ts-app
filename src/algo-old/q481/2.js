/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  const n = s.length
  let minTotalCost = 0

  for (let i = 0; i < n; i++) {
    // 对于每个连续相同字符的组
    let groupSum = cost[i]
    let groupMax = cost[i]

    // 将相同字符分成一组
    while (i + 1 < n && s[i + 1] === s[i]) {
      i++
      groupSum += cost[i]
      groupMax = Math.max(groupMax, cost[i])
    }

    // 保留组中代价最大的字符，删除其他字符
    minTotalCost += groupSum - groupMax
  }

  return minTotalCost
}
console.log(minCost('aabaac', [1, 2, 3, 4, 1, 10])) // 11
