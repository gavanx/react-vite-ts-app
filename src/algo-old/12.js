var intToRoman = function (num) {
  let ans = ''
  let c
  if (num >= 1000) {
    c = Math.floor(num / 1000)
    ans += 'M'.repeat(c)
    num -= c * 1000
  }
  if (num >= 900) {
    ans += 'CM'
    num -= 900
  }
  if (num >= 500) {
    c = Math.floor(num / 500)
    ans += 'D'.repeat(c)
    num -= c * 500
  }
  if (num >= 400) {
    ans += 'CD'
    num -= 400
  }
  if (num >= 100) {
    c = Math.floor(num / 100)
    ans += 'C'.repeat(c)
    num -= c * 100
  }
  if (num >= 90) {
    ans += 'XC'
    num -= 90
  }
  if (num >= 50) {
    c = Math.floor(num / 50)
    ans += 'L'.repeat(c)
    num -= c * 50
  }
  if (num >= 40) {
    ans += 'XL'
    num -= 40
  }
  if (num >= 10) {
    c = Math.floor(num / 10)
    ans += 'X'.repeat(c)
    num -= c * 10
  }
  if (num >= 9) {
    ans += 'IX'
    num -= 9
  }
  if (num >= 5) {
    c = Math.floor(num / 5)
    ans += 'V'.repeat(c)
    num -= c * 5
  }
  if (num >= 4) {
    ans += 'IV'
    num -= 4
  }
  if (num >= 1) {
    c = num
    ans += 'I'.repeat(c)
    num -= c * 1
  }
  return ans
}
// 示例 1: 输入：num = 3749  输出：MMMDCCXLIX
try {
  const got = intToRoman(3749)
  const expected = 'MMMDCCXLIX'
  console.log(1, { ok: got === expected, got, expected })
} catch (e) {
  console.log(1, { ok: false, error: String(e) })
}

// 示例 2: 输入：num = 58  输出：LVIII
try {
  const got = intToRoman(58)
  const expected = 'LVIII'
  console.log(2, { ok: got === expected, got, expected })
} catch (e) {
  console.log(2, { ok: false, error: String(e) })
}

// 示例 3: 输入：num = 1994  输出：MCMXCIV
try {
  const got = intToRoman(1994)
  const expected = 'MCMXCIV'
  console.log(3, { ok: got === expected, got, expected })
} catch (e) {
  console.log(3, { ok: false, error: String(e) })
}
// 示例 1: 输入：num = 3749  输出：MMMDCCXLIX
try {
  const got = intToRoman(3749)
  const expected = 'MMMDCCXLIX'
  console.log(1, { ok: got === expected, got, expected })
} catch (e) {
  console.log(1, { ok: false, error: String(e) })
}

// 示例 2: 输入：num = 58  输出：LVIII
try {
  const got = intToRoman(58)
  const expected = 'LVIII'
  console.log(2, { ok: got === expected, got, expected })
} catch (e) {
  console.log(2, { ok: false, error: String(e) })
}

// 示例 3: 输入：num = 1994  输出：MCMXCIV
try {
  const got = intToRoman(1994)
  const expected = 'MCMXCIV'
  console.log(3, { ok: got === expected, got, expected })
} catch (e) {
  console.log(3, { ok: false, error: String(e) })
}
