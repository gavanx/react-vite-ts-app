var addBinary = function (a, b) {
  const m = a.length
  const n = b.length
  let ans = []
  let i = m - 1,
    j = n - 1
  let carry = 0
  const calc = (sum) => {
    if (sum >= 2) {
      ans.unshift(sum % 2)
      carry = 1
    } else {
      ans.unshift(sum)
      carry = 0
    }
  }
  while (i >= 0 && j >= 0) {
    calc(parseInt(a[i]) + parseInt(b[j]) + carry)
    i--
    j--
  }
  while (i >= 0) {
    calc(parseInt(a[i]) + carry)
    i--
  }
  while (j >= 0) {
    calc(parseInt(b[j]) + carry)
    j--
  }
  if (carry === 1) {
    ans.unshift(1)
  }
  return ans.join('')
}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
