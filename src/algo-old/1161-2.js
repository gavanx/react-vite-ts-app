var maxLevelSum = function (root) {
  let maxSum = -Infinity
  let ans = 0
  let level = 1

  let queue = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    let levelSum = 0

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift() // 取出队列第一个节点
      levelSum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    if (levelSum > maxSum) {
      maxSum = levelSum
      ans = level
    }

    level++
  }

  return ans
}
