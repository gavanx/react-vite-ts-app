var maxLevelSum = function (root) {
  const res = { level: 1, max: root.val }
  const dfs = (node, level) => {
    if (!node || (!node.left && !node.right)) {
      return
    }
    let val = 0
    if (node.left) {
      val += node.left.val
    }
    if (node.right) {
      val += node.right.val
    }
    level += 1
    if (val > res.max || (val === res.max && level < res.level)) {
      res.level = level
      res.max = val
    }
    dfs(node.left, level)
    dfs(node.right, level)
  }
  dfs(root, 1)
  return res.level
}
