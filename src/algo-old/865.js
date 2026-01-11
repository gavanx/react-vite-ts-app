var subtreeWithAllDeepest = function (root) {
  let maxDepth = -1
  let ans = null

  function dfs(node, depth) {
    if (node === null) {
      maxDepth = Math.max(maxDepth, depth)
      return depth
    }
    const leftMaxDepth = dfs(node.left, depth + 1)
    const rightMaxDepth = dfs(node.right, depth + 1)
    if (leftMaxDepth === rightMaxDepth && leftMaxDepth === maxDepth) {
      ans = node
    }
    return Math.max(leftMaxDepth, rightMaxDepth)
  }

  dfs(root, 0)
  return ans
}
