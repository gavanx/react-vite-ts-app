var maximumsSplicedArray = function (nums1, nums2) {
  const n = nums1.length
  const fn = (a, b) => {
    let sum = 0
    let max = 0
    let tmp = 0
    let diff
    for (let i = 0; i < n; i++) {
      sum += a[i]
      diff = b[i] - a[i]
      tmp = Math.max(tmp + diff, diff)
      max = Math.max(max, tmp)
    }
    return sum + max
  }
  return Math.max(fn(nums1, nums2), fn(nums2, nums1))
}

console.log(maximumsSplicedArray([60, 60, 60], [10, 90, 10]))
console.log(maximumsSplicedArray([20, 40, 20, 70, 30], [50, 20, 50, 40, 20]))
console.log(maximumsSplicedArray([7, 11, 13], [1, 1, 1]))
