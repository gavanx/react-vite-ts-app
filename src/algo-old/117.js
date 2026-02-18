var connect = function (root) {
  if (!root) return
  const q = [root]
  while (q.length > 0) {
    const first = q.shift()
    if (first.left) {
      q.push(first.left)
    }
    if (first.right) {
      q.push(first.right)
    }
    first.next = q[0]
  }
}
