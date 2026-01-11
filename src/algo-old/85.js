var largestRectangleArea = function (heights) {
  const st = [-1]
  let ans = 0
  for (let right = 0; right < heights.length; right++) {
    const h = heights[right]
    while (st.length > 1 && heights[st[st.length - 1]] >= h) {
      const i = st.pop()
      const left = st[st.length - 1]
      ans = Math.max(ans, heights[i] * (right - left - 1))
    }
    st.push(right)
  }
  return ans
}

var maximalRectangle = function (matrix) {
  const n = matrix[0].length
  let heights = Array(n + 1).fill(0)
  let ans = 0
  for (const row of matrix) {
    for (let j = 0; j < n; j++) {
      if (row[j] === '0') {
        heights[j] = 0
      } else {
        heights[j]++
      }
    }
    ans = Math.max(ans, largestRectangleArea(heights))
  }
  return ans
}
