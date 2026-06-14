var createBinaryTree = function (descriptions) {
  const map = new Map()
  const pMap = new Map()
  const ensureNode = (v) => {
    if (map.has(v)) {
      return map.get(v)
    } else {
      node = new TreeNode(v, null, null)
      map.set(v, node)
      return node
    }
  }
  for (const [p, c, l] of descriptions) {
    let pnode = ensureNode(p)
    let cnode = ensureNode(c)
    if (l) {
      pnode.left = cnode
    } else {
      pnode.right = cnode
    }
    pMap.set(c, p)
  }
  let root = map.get(descriptions[0][0])
  while (pMap.has(root.val)) {
    root = map.get(pMap.get(root.val))
  }
  return root
}
