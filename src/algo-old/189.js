var rotate = function (nums, k) {
  const n = nums.length
  k = k % n
  const pre = nums.splice(0, n - k)
  nums.push(...pre)
  return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -100, 3, 99], 2))
