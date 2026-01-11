var maxArea = function (height) {
  const n = height.length
  let l = 0,
    r = n - 1
  let ans = -Infinity
  while (l < r) {
    ans = Math.max(ans, (r - l) * Math.min(height[l], height[r]))
    if (height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }
  return ans
}

console.log(maxArea([1, 1]))
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))