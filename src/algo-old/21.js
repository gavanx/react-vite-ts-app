var mergeTwoLists = function (list1, list2) {
  let p1 = list1
  let p2 = list2
  const h = new ListNode(0, null)
  let c = h
  while (p1 && p2) {
    if (p1.val < p2.val) {
      c.next = p1
      c = p1
      p1 = p1.next
    } else if (p1.val >= p2.val) {
      c.next = p2
      c = p2
      p2 = p2.next
    }
  }
  if (p1) {
    c.next = p1
  } else if (p2) {
    c.next = p2
  }
  return h.next
}
