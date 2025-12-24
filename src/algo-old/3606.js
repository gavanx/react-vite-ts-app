var validateCoupons = function (code, businessLine, isActive) {
  const res = []
  const n = code.length
  const r = /[a-zA-Z0-9_]+/g
  const bs = ['electronics', 'grocery', 'pharmacy', 'restaurant']
  for (let i = 0; i < n; i++) {
    const m = code[i].match(r)
    if (isActive[i] && m && m[0] === code[i] && bs.includes(businessLine[i])) {
      res.push([businessLine[i], code[i]])
    }
  }
  return res
    .sort((a, b) => {
      const r = a[0].charCodeAt(0) - b[0].charCodeAt(0)
      if (r === 0) {
        return a[1] < b[1] ? -1 : 1
      }
      return r
    })
    .map((a) => a[1])
}

console.log(
  validateCoupons(
    ['SAVE20', '', 'PHARMA5', 'SAVE@20'],
    ['restaurant', 'grocery', 'pharmacy', 'restaurant'],
    [true, true, true, true]
  )
)

console.log(validateCoupons(['Qf8NjqOTYp', 'w4xOTEM20C'], ['pharmacy', 'pharmacy'], [true, true]))
