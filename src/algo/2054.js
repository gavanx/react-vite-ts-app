/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[1] - b[1])
  const stack = [[0, 0]]
  let ans = 0
  for (const [startTime, endTime, value] of events) {
    let left = 0,
      right = stack.length - 1
    let targetIndex = 0
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (stack[mid][0] < startTime) {
        targetIndex = mid
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    ans = Math.max(ans, stack[targetIndex][1] + value)
    if (value > stack[stack.length - 1][1]) {
      stack.push([endTime, value])
    }
  }
  return ans
}

console.log(
  maxTwoEvents([
    [1, 3, 2],
    [4, 5, 2],
    [2, 4, 3],
  ])
) // 4
console.log(
  maxTwoEvents([
    [1, 3, 2],
    [4, 5, 2],
    [1, 5, 5],
  ])
) // 5
console.log(
  maxTwoEvents([
    [1, 5, 3],
    [1, 5, 1],
    [6, 6, 5],
  ])
) // 8
