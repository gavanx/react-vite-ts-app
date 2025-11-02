/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const s = new Set(nums)
  let cur = head
  while (cur) {
    if (s.has(cur.val)) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
