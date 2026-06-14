const inf = Number.MAX_SAFE_INTEGER

class Node {
  constructor() {
    this.son = new Array(26).fill(null)
    this.min_len = inf
    this.best_index = 0
  }
}

/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  const ord_a = 'a'.charCodeAt(0)
  const root = new Node()

  for (let i = 0; i < wordsContainer.length; i++) {
    const s = wordsContainer[i]
    const len_s = s.length

    if (len_s < root.min_len) {
      root.min_len = len_s
      root.best_index = i
    }

    let cur = root
    for (let j = s.length - 1; j >= 0; j--) {
      const ch = s[j]
      const c = ch.charCodeAt(0) - ord_a

      if (!cur.son[c]) {
        cur.son[c] = new Node()
      }
      cur = cur.son[c]

      if (len_s < cur.min_len) {
        cur.min_len = len_s
        cur.best_index = i
      }
    }
  }

  const ans = []
  for (const s of wordsQuery) {
    let cur = root
    for (let j = s.length - 1; j >= 0; j--) {
      const ch = s[j]
      const c = ch.charCodeAt(0) - ord_a
      if (!cur.son[c]) break
      cur = cur.son[c]
    }
    ans.push(cur.best_index)
  }

  return ans
}

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
  let allPassed = true
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    const t0 = performance.now()
    try {
      const got = fn(...args)
      const ms = performance.now() - t0
      totalMs += ms
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      if (!ok) allPassed = false
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
      allPassed = false
      const ms = performance.now() - t0
      totalMs += ms
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
      throw e
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS
  const totalStyle = totalSlow
    ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;'
    : 'color:#64748b;'
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms [${allPassed ? 'success' : 'fail'}]`, totalStyle)
}

const __lcExamples = [
  {
    args: [
      ['abcd', 'bcd', 'xbcd'],
      ['cd', 'bcd', 'xyz'],
    ],
    expected: [1, 1, 1],
    comment:
      '// 输入：wordsContainer = ["abcd","bcd","xbcd"], wordsQuery = ["cd","bcd","xyz"]  输出：[1,1,1]',
  },
  {
    args: [
      ['abcdefgh', 'poiuygh', 'ghghgh'],
      ['gh', 'acbfgh', 'acbfegh'],
    ],
    expected: [2, 0, 2],
    comment:
      '// 输入：wordsContainer = ["abcdefgh","poiuygh","ghghgh"], wordsQuery = ["gh","acbfgh","acbfegh"]  输出：[2,0,2]',
  },
]

__lcRunExamples(stringIndices, __lcExamples)
