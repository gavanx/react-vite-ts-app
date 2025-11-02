var nextBeautifulNumber = function (n) {
  while (true) {
    n++
    if (isBeautiful(n)) {
      return n
    }
  }
}

var isBeautiful = function (n) {
  var s = n.toString()
  var count = {}
  for (var i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1
  }
  for (var key in count) {
    if (count[key] !== parseInt(key)) {
      return false
    }
  }
  return true
}
