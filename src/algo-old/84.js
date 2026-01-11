var largestRectangleArea = function (heights) {
  const n = heights.length
  let ans = 0
  const stack = [0]
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i]
    while (heights[stack[stack.length - 1]] > h) {
      const top = stack.pop()
      const left = stack[stack.length - 1]
      const right = i + 1
      ans = Math.max(ans, heights[top] * (right - left + 1))
    }
    stack.push(i + 1)
  }
  return ans
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
