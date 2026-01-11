var maxSum = function (nums1, nums2) {
  const n = Math.max(nums1.length, nums2.length)
  const map = new Map()
  const dupMap = new Map()
  const MOD = 1e9 + 7
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i)
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      dupMap.set(nums2[i], [map.get(nums2[i]), i])
    }
  }
  const memo = Array.from({ length: n }, () => [undefined, undefined])
  const dfs = (i, f) => {
    const arr = f === 0 ? nums1 : nums2
    if (i === arr.length) {
      return 0
    }
    if (memo[i][f] !== undefined) {
      return memo[i][f]
    }
    const v = arr[i]
    let res = dfs(i + 1, f) + v
    if (dupMap.has(v)) {
      res = Math.max(res, dfs(dupMap.get(v)[f === 0 ? 1 : 0] + 1, 1 - f) + v)
    }
    return memo[i][f] = res
  }
  return Math.max(dfs(0, 0), dfs(0, 1)) % MOD
}

console.log(maxSum([2, 4, 5, 8, 10], [4, 6, 8, 9]))
console.log(maxSum([1, 3, 5, 7, 9], [3, 5, 100]))
console.log(maxSum([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
