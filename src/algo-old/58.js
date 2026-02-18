var lengthOfLastWord = function (s) {
  const s2 = s.split(' ')
  for (let i = s2.length - 1; i >= 0; i--) {
    if (s2[i].length > 0) {
      return s2[i].length
    }
  }
  return s.length
}

console.log(lengthOfLastWord('a'))

// 示例 1: 输入：s = "Hello World  输出：5
try {
  const got = lengthOfLastWord('Hello World')
  const expected = 5
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(1, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(1, { ok: false, error: String(e) })
}

// 示例 2: 输入：s = "   fly me   to   the moon    输出：4
try {
  const got = lengthOfLastWord('   fly me   to   the moon')
  const expected = 4
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(2, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(2, { ok: false, error: String(e) })
}

// 示例 3: 输入：s = "luffy is still joyboy  输出：6
try {
  const got = lengthOfLastWord('luffy is still joyboy')
  const expected = 6
  const gotOut = Array.isArray(got) ? got.join() : got
  const expectedOut = Array.isArray(expected) ? expected.join() : expected
  const ok = gotOut === expectedOut
  console.log(3, { ok, got: gotOut, expected: expectedOut })
} catch (e) {
  console.log(3, { ok: false, error: String(e) })
}
