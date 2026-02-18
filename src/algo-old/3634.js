var minRemoval = function (nums, k) {
  const map = new Map()
  const dfs = (i, j) => {
    if (map.has(`${i}-${j}`)) {
      return map.get(`${i}-${j}`)
    }
    if (j - i < 1) {
      return 0
    }
    if (nums[j] > nums[i] * k) {
      const ret = 1 + Math.min(dfs(i, j - 1), dfs(i + 1, j))
      map.set(`${i}-${j}`, ret)
      return ret
    } else {
      map.set(`${i}-${j}`, 0)
      return 0
    }
  }
  nums = nums.sort((a, b) => a - b)
  return dfs(0, nums.length - 1)
}

console.log(minRemoval([2, 3, 5, 9], 4))
// console.log(minRemoval([1, 6, 2, 9], 3))
// console.log(minRemoval([4, 6,], 2))
// console.log(minRemoval([2, 12,], 2))
