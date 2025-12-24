var validateCoupons = function (code, businessLine, isActive) {
  BUSINESS_LINE_TO_CATEGORY = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  }
  const groupCount = Object.keys(BUSINESS_LINE_TO_CATEGORY).length
  const groups = Array.from({ length: groupCount }, () => [])

  for (let i = 0; i < code.length; i++) {
    const s = code[i]
    const bus = businessLine[i]
    const active = isActive[i]

    const category =
      BUSINESS_LINE_TO_CATEGORY[bus] !== undefined ? BUSINESS_LINE_TO_CATEGORY[bus] : -1

    if (s && category >= 0 && active) {
      let isValid = true
      for (let j = 0; j < s.length; j++) {
        const c = s[j]
        if (
          c !== '_' &&
          !((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
        ) {
          isValid = false
          break
        }
      }

      if (isValid) {
        groups[category].push(s)
      }
    }
  }

  const result = []
  for (const g of groups) {
    g.sort()
    result.push(...g)
  }
  return result
}
