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

// ========== 4. 题目解法（旋转链表） ==========
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head

  // 计算链表长度
  let len = 1
  let tail = head
  while (tail.next) {
    tail = tail.next
    len++
  }

  // 实际需要旋转的步数
  k = k % len
  if (k === 0) return head

  // 找到新尾节点
  let newTail = head
  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail.next
  }
  let newHead = newTail.next

  // 旋转
  newTail.next = null
  tail.next = head

  return newHead
}

// ========== 5. 本地调试测试 ==========
// 测试用例 1
let head = arrayToList([1, 2, 3, 4, 5])
let k = 2
let result = rotateRight(head, k)
console.log('旋转后结果：', listToArray(result)) // 预期 [4,5,1,2,3]

// 测试用例 2
// let head2 = arrayToList([0,1,2]);
// let k2 = 4;
// let result2 = rotateRight(head2, k2);
// console.log("旋转后结果：", listToArray(result2)); // 预期 [2,0,1]
