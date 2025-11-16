var minOperations = function (nums) {
  const n = nums.length
  const gcd = (a, b) => {
    let tmp
    while (a != 0) {
      tmp = a
      a = b % a
      b = tmp
    }
    return b
  }
  let res = 0
  let all = 0
  let cnt1 = 0
  for (const x of nums) {
    all = gcd(all, x)
    if (x === 1) {
      cnt1++
    }
  }
  if (all > 1) {
    return -1
  }
  if (cnt1 > 0) {
    return n - cnt1
  }
  let minSize = n
  let g
  for (let i = 0; i < n; i++) {
    g = 0
    for (let j = i; j < n; j++) {
      g = gcd(g, nums[j])
      if (g === 1) {
        minSize = Math.min(minSize, j - i + 1)
        break
      }
    }
  }
  return minSize + n - 2
}

console.log(minOperations([2, 6, 3, 4]))
