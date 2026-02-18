var addBinary = function (a, b) {
  const ans = []
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0

  while (i >= 0 || j >= 0 || carry) {
    const x = i >= 0 ? Number(a[i]) : 0
    const y = j >= 0 ? Number(b[j]) : 0
    const sum = x + y + carry
    ans.unshift(String(sum % 2))
    carry = Math.floor(sum / 2)
    i--
    j--
  }

  return ans.join('')
}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101