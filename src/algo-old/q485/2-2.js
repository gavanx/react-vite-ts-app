var maxCapacity = function (costs, capacity, budget) {
  const n = costs.length
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push([capacity[i], costs[i]])
  }
  arr = arr.sort((a, b) => b[0] - a[0])
  let res = 0
  let b
  for (let i = 0; i < n; i++) {
    if (budget > arr[i][1]) {
      res = Math.max(res, arr[i][0])
      b = budget - arr[i][1]
      if (b < 0) {
        continue
      }
      for (let j = 0; j < n; j++) {
        if (j !== i && b > arr[j][1]) {
          res = Math.max(res, arr[i][0] + arr[j][0])
        }
      }
    }
  }
  return res
}

console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8))
console.log(maxCapacity([3, 5, 7, 4], [2, 4, 3, 6], 7))
console.log(maxCapacity([2, 2, 2], [3, 5, 4], 5))
