var sumNumbers = function (root) {
  let sum = 0
  const dfs = (node, s) => {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      sum += parseInt(s + node.val)
    }
    if (node.left) {
      dfs(node.left, s + node.val)
    }
    if (node.right) {
      dfs(node.right, s + node.val)
    }
  }
  dfs(root, '')
  return sum
}
