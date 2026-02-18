var pathSum = function (root, targetSum) {
  let ans = 0
  function dfs(node, currSum) {
    if (!node) return
    if (currSum === targetSum) {
      ans++
    }
    const s = [...new Set([0, node.val, node.val + currSum])]
    for (const sum of s) {
      dfs(node.left, sum)
      dfs(node.right, sum)
    }
  }
  dfs(root, 0)
  return ans
}
