var getMinimumDifference = function (root) {
  let ans = Infinity
  let pre = -Infinity
  const dfs = (node) => {
    if (!node) {
      return
    }
    dfs(node.left)
    ans = Math.min(ans, node.val - pre)
    pre = node.val
    dfs(node.right)
  }
  dfs(root)
  return ans
}
