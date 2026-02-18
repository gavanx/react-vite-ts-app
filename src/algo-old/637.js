var averageOfLevels = function (root) {
  let q = [root]
  const res = []
  while (q.length > 0) {
    const len = q.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      sum += q[i].val
      if (q[i].left) {
        q.push(q[i].left)
      }
      if (q[i].right) {
        q.push(q[i].right)
      }
    }
    res.push(sum / len)
    q = q.slice(len)
  }
  return res
}
