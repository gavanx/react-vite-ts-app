var spellchecker = function (wordlist, queries) {
  const wm = new Map()
  const c = new Map()
  const v = new Map()
  const vArr = ['a', 'e', 'i', 'o', 'u']
  const getVol = (w) => {
    let s = ''
    for (const c of w) {
      if (vArr.includes(c)) {
        s += '*'
      } else {
        s += c
      }
    }
    return s
  }
  for (const w of wordlist) {
    if (!wm.has(w)) {
      wm.set(w, w)
    }
    const w2 = w.toLowerCase()
    if (!c.has(w2)) {
      c.set(w2, w)
    }
    const w3 = getVol(w2)
    console.log(w3)
    if (!v.has(w3)) {
      v.set(w3, w)
    }
  }
  const doQuery = (q, q2, q3) => {
    if (wm.has(q)) {
      return wm.get(q)
    }
    if (c.has(q2)) {
      return c.get(q2)
    }
    if (v.has(q3)) {
      return v.get(q3)
    }
    return ''
  }
  let ret = []
  for (const q of queries) {
    const q2 = q.toLowerCase()
    const q3 = getVol(q2)
    ret.push(doQuery(q, q2, q3))
  }
  return ret
}

console.log(
  spellchecker(
    ['KiTe', 'kite', 'hare', 'Hare'],
    ['kite', 'Kite', 'KiTe', 'Hare', 'HARE', 'Hear', 'hear', 'keti', 'keet', 'keto']
  )
)
