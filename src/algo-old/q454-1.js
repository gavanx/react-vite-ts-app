var generateTag = function (caption) {
  const arr = caption.split(' ')
  let r = ''
  for (let w of arr) {
    if (w.length === 0) {
      continue
    }
    w = w.trim().replace(/\W/g, '')
    r += w[0].toUpperCase() + w.slice(1).toLowerCase()
    if (r.length > 100) {
      break
    }
  }
  if (r.length === 0) {
    return '#'
  }
  return '#' + r[0].toLocaleLowerCase() + r.slice(1, 99)
}
