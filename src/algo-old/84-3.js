var largestRectangleArea = function (heights) {
  if (!heights || heights.length === 0) return 0
  const stack = []
  let maxArea = 0
  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i === heights.length ? 0 : heights[i]
    while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
      const heightIndex = stack.pop()
      const height = heights[heightIndex]
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      const area = height * width
      maxArea = Math.max(maxArea, area)
    }
    stack.push(i)
  }

  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
