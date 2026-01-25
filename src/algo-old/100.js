var isSameTree = function (p, q) {
  const dfs = (l, r) => {
    if (!l && !r) {
      return true
    }
    if (l && r && l.val === r.val) {
      return dfs(l.left, r.left) && dfs(l.right, r.right)
    }
    return false
  }
  return dfs(p, q)
}
