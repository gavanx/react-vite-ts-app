var minimumPairRemoval = function (nums) {
  const n = nums.length
  const dfs = (arr) => {
    const n = arr.length
    let flag = false
    let minIndex = -1
    let min = Infinity
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        flag = true
      }
      if (arr[i - 1] + arr[i] < min) {
        min = arr[i - 1] + arr[i]
        minIndex = i - 1
      }
    }
    if (flag) {
      arr[minIndex] = arr[minIndex] + arr[minIndex + 1]
      arr.splice(minIndex + 1, 1)
      return dfs(arr)
    } else {
      return arr
    }
  }
  const res = dfs(nums)
  return n - res.length
}

console.log(minimumPairRemoval([5, 2, 3, 1]))
console.log(minimumPairRemoval([1, 2, 2]))
