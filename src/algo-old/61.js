// ========== 1. 链表节点定义 ==========
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// ========== 2. 工具函数：数组 转 链表 ==========
function arrayToList(arr) {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head
}

// ========== 3. 工具函数：链表 转 数组（方便打印查看） ==========
function listToArray(head) {
  let res = []
  let cur = head
  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }
  return res
}
var rotateRight = function (head, k) {
  if (k == 0 || !head || !head.next) {
    return head
  }
  let n = 1
  let p = head
  while (p.next) {
    n++
    p = p.next
  }
  k = k % n
  if (k === 0) {
    return head
  }
  let l = p
  p = head
  k = n - k - 1
  while (k > 0) {
    k--
    p = p.next
  }
  l.next = head
  head = p.next
  p.next = null
  return head
}

let head = arrayToList([1, 2, 3, 4, 5])
let k = 2
let result = rotateRight(head, k)
console.log('旋转后结果：', listToArray(result)) // 预期 [4,5,1,2,3]
