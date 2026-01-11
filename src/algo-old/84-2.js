var largestRectangleArea = function (heights) {
  if (!heights || heights.length === 0) return 0

  const stack = [] // 存储索引的单调递增栈
  let maxArea = 0

  // 遍历每个柱子
  for (let i = 0; i <= heights.length; i++) {
    // 当前柱子的高度（如果是最后一个虚拟柱子，高度为0）
    const currentHeight = i === heights.length ? 0 : heights[i]

    // 如果当前柱子比栈顶柱子低，计算以栈顶柱子为高的矩形面积
    while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
      // 弹出栈顶元素，这个就是我们要计算面积的柱子
      const heightIndex = stack.pop()
      const height = heights[heightIndex]

      // 计算宽度：
      // 如果栈为空，说明这个柱子是到目前遇到的最低的，宽度就是当前索引i
      // 否则宽度是 i - 栈顶索引 - 1
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1

      // 计算面积并更新最大值
      const area = height * width
      maxArea = Math.max(maxArea, area)
    }

    // 将当前索引入栈
    stack.push(i)
  }

  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
