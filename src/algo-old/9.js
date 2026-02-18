var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  if (x === 0) {
    return true
  }
  const a = []
  const x0 = x
  while (x > 0) {
    a.push(x % 10)
    x = Math.floor(x / 10)
  }
  return a.join('') === String(x0)
}

console.log(isPalindrome(0))

// 示例 1: 输入：x = 121  输出：true
try {
  const got = isPalindrome(121)
  const expected = true
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(1, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(1, { ok: false, error: String(e) })
}

// 示例 2: 输入：x = -121  输出：false
try {
  const got = isPalindrome(-121)
  const expected = false
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(2, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(2, { ok: false, error: String(e) })
}

// 示例 3: 输入：x = 10  输出：false
try {
  const got = isPalindrome(10)
  const expected = false
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(3, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(3, { ok: false, error: String(e) })
}
function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
    }
  }
}

const __lcExamples = [
  { args: [121], expected: true, comment: '// 输入：x = 121  输出：true' },
  { args: [-121], expected: false, comment: '// 输入：x = -121  输出：false' },
  { args: [10], expected: false, comment: '// 输入：x = 10  输出：false' },
]

__lcRunExamples(isPalindrome, __lcExamples)
