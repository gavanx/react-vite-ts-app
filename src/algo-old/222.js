var countNodes = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) {
      ans++
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return ans
}
