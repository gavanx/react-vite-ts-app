const weekDays = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  0: '周日',
}

const test = () =>
  Object.entries(weekDays)
    .sort((a, b) => {
      if (a[0] === '0') return 1
      if (b[0] === '0') return -1
      return a[0].localeCompare(b[0])
    })
    .map(([key, value]) => `${value}`)
    .join(',')

console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
