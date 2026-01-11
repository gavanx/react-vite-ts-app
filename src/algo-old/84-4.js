var largestRectangleArea = function (heights) {
  heights.unshift(0)
  heights.push(0)
  const n = heights.length
  const stack = [0]
  let ans = 0
  for (let i = 1; i < n; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const top = stack.pop()
      const left = stack[stack.length - 1]
      const right = i
      ans = Math.max(ans, heights[top] * (right - left - 1))
    }
    stack.push(i)
  }
  return ans
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 4]))
