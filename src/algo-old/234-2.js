var isPalindrome = function (head) {
  const stack = []
  let count = 0
  while (head) {
    if (stack[stack.length - 1] !== head.val) {
      stack.push(head.val)
    } else if (stack.length > 0) {
      stack.pop()
    }
    head = head.next
    count++
  }
  return stack.length === 0 || stack.length === count
}

console.log(isPalindrome({ val: 1, next: { val: 0, next: { val: 1, next: null } } }))
