var reverseWords = function (s) {
  const arr = s.split(' ')
  let cur = 0,
    last = 0
  const y = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < arr[0].length; i++) {
    if (y.includes(arr[0][i])) last++
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (y.includes(arr[i][j])) cur++
    }
    if (cur === last) {
      arr[i] = arr[i].split('').reverse().join('')
    }
    cur = 0
  }
  return arr.join(' ')
}

// console.log(reverseWords('cat and mice'))
console.log(reverseWords('book is nice'))
// console.log(reverseWords('banana healthy'))
