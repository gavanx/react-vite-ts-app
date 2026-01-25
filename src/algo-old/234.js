var isPalindrome = function (head) {
  if (!head || !head.next) return true
  const stack = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  let len = stack.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (stack[i] !== stack[len - 1 - i]) return false
  }
  return true
}
