var maxSum = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const MOD = 1e9 + 7
  let a1 = 0
  let a2 = 0
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      a1 += nums1[i]
      i++
    } else if (nums1[i] > nums2[j]) {
      a2 += nums2[j]
      j++
    } else {
      a1 = a2 = Math.max(a1, a2) + nums1[i]
      i++
      j++
    }
  }
  while (i < m) {
    a1 += nums1[i]
    i++
  }
  while (j < n) {
    a2 += nums2[j]
    j++
  }
  return Math.max(a1, a2) % MOD
}

