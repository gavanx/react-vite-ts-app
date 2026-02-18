var isBalanced = function (root) {
  function height(node) {
    if (node === null) {
      return 0
    }
    const l = height(node.left)
    if (l === -1) {
      return -1
    }
    const r = height(node.right)
    if (r === -1 || Math.abs(l - r) > 1) {
      return -1
    }
    return Math.max(l, r) + 1
  }
  return height(root) !== -1
}
