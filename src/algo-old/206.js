var reverseList = function (head) {
  let p = head
  let t
  while (p && p.next) {
    t = head.next
    head.next = p.next
    p.next = t
    p = p.next
  }
  return head
}
