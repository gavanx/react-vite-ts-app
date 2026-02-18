var sortList = function (head) {
  const h = new ListNode(0, null)
  let p = head
  while (p != null) {
    let c = h
    while (c.next && c.next.val < p.val) {
      c = c.next
    }
    const cc = p
    p = p.next
    cc.next = c.next
    c.next = cc
  }
  return h.next
}
