var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  let q = [root]
  const res = []
  let lr = true
  while (q.length > 0) {
    const len = q.length
    const row = []
    if (lr) {
      for (let i = 0; i < len; i++) {
        row.push(q[i].val)
      }
    } else {
      for (let i = len - 1; i >= 0; i--) {
        row.push(q[i])
      }
    }
    for (let i = 0; i < len; i++) {
      if (q[i].left) {
        q.push(q[i].left)
      }
      if (q[i].right) {
        q.push(q[i].right)
      }
    }
    res.push(row)
    lr = !lr
    q = q.slice(len)
  }
  return res
}
