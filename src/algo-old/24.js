var swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  while (prev.next && prev.next.next) {
    let first = prev.next
    let second = prev.next.next
    first.next = second.next
    second.next = first
    prev.next = second
    prev = first
  }
  return dummy.next
}
