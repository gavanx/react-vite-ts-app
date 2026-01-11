var pyramidTransition = function (bottom, allowed) {
  const map = new Map()
  let b
  for (let s of allowed) {
    b = s.substring(0, 2)
    if (map.has(b)) {
      map.get(b).push(s[2])
    } else {
      map.set(b, [s[2]])
    }
  }
  const createBottom = (next, i, prefix) => {
    if (i === next.length) {
      return [prefix]
    }
    return next[i].map((c) => createBottom(next, i + 1, prefix + c)).flat()
  }
  const dfs = (bottom) => {
    const n = bottom.length
    if (n === 1) {
      return true
    }
    let next = []
    for (let i = 0; i < n - 1; i++) {
      let t = bottom.substring(i, i + 2)
      if (map.has(t)) {
        next.push(map.get(t))
      } else {
        return false
      }
    }
    next = createBottom(next, 0, '')
    console.log('xxxxxxxxxx', next)
    return next.some((b) => dfs(b))
  }
  return dfs(bottom)
}

// console.log(pyramidTransition('BCD', ['BCG', 'CDE', 'GEA', 'FFF']))
// console.log(pyramidTransition('AAAA', ["AAB", "AAC", "BCD", "BBE", "DEF"]))
console.log(
  pyramidTransition('ABCD', ['ABC', 'BCA', 'CDA', 'ABD', 'BCE', 'CDF', 'DEA', 'EFF', 'AFF'])
)
