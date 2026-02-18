var inorderTraversal = function (root) {
  function dfs(node) {
    if (node === null) {
      return
    }
    dfs(node.left)
    ans.push(node.val)
    dfs(node.right)
  }

  const ans = []
  dfs(root)
  return ans
}

var sortedArrayToBST = function (nums) {
  function dfs(left, right) {
    if (left === right) {
      return null
    }
    const m = Math.floor((left + right) / 2)
    return new TreeNode(nums[m], dfs(left, m), dfs(m + 1, right))
  }
  return dfs(0, nums.length)
}

var balanceBST = function (root) {
  const nums = inorderTraversal(root)
  return sortedArrayToBST(nums)
}
