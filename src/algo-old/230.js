var kthSmallest = function (root, k) {
  let ans = 0
  function dfs(node) {
    if (node === null || k === 0) {
      return
    }
    dfs(node.left)
    if (--k === 0) {
      ans = node.val
    }
    dfs(node.right)
  }
  dfs(root)
  return ans
}
