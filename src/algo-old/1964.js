/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
function longestObstacleCourseAtEachPosition(obstacles) {
  const d = []
  const ans = []

  function lowerBound(arr, target) {
    let left = 0
    let right = arr.length

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] <= target) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    return left
  }

  for (const ob of obstacles) {
    if (d.length === 0 || ob >= d[d.length - 1]) {
      d.push(ob)
      ans.push(d.length)
    } else {
      const loc = lowerBound(d, ob)
      ans.push(loc + 1)
      d[loc] = ob
    }
  }

  return ans
}

// 测试用例
console.log(longestObstacleCourseAtEachPosition([1, 2, 3, 2])) // [1, 2, 3, 3]
console.log(longestObstacleCourseAtEachPosition([2, 2, 1])) // [1, 2, 1]
console.log(longestObstacleCourseAtEachPosition([3, 1, 5, 6, 4, 2])) // [1, 1, 2, 3, 3, 3]
