var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0)
  let p = l1, q = l2, curr = dummy
  let carry = 0
  while (p !== null || q !== null) {
    const x = p !== null ? p.val : 0
    const y = q !== null ? q.val : 0
    const sum = carry + x + y
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummy.next
}
