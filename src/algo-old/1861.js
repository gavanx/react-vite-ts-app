var rotateTheBox = function (box) {
  const m = box.length
  const n = box[0].length

  for (let i = 0; i < m; i++) {
    let empty = n - 1
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '*') {
        empty = j - 1
      } else if (box[i][j] === '#') {
        box[i][j] = '.'
        box[i][empty] = '#'
        empty--
      }
    }
  }

  const result = Array.from({ length: n }, () => new Array(m))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][m - 1 - i] = box[i][j]
    }
  }

  return result
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
    args: [[['#', '.', '#']]],
    expected: [['.'], ['#'], ['#']],
    comment: '// 输入：box = [["#",".","#"]]  输出：[["."],\n      ["#"],\n      ["#"]]',
  },
  {
    args: [
      (box = [
        ['#', '.', '*', '.'],
        ['#', '#', '*', '.'],
      ]),
    ],
    expected: [
      ['#', '.'],
      ['#', '#'],
      ['*', '*'],
      ['.', '.'],
    ],
    comment:
      '// 输入：box = [["#",".","*","."],\n            ["#","#","*","."]]  输出：[["#","."],\n      ["#","#"],\n      ["*","*"],\n      [".","."]]',
  },
  {
    args: [
      (box = [
        ['#', '#', '*', '.', '*', '.'],
        ['#', '#', '#', '*', '.', '.'],
        ['#', '#', '#', '.', '#', '.'],
      ]),
    ],
    expected: [
      ['.', '#', '#'],
      ['.', '#', '#'],
      ['#', '#', '*'],
      ['#', '*', '.'],
      ['#', '.', '*'],
      ['#', '.', '.'],
    ],
    comment:
      '// 输入：box = [["#","#","*",".","*","."],\n            ["#","#","#","*",".","."],\n            ["#","#","#",".","#","."]]  输出：[[".","#","#"],\n      [".","#","#"],\n      ["#","#","*"],\n      ["#","*","."],\n      ["#",".","*"],\n      ["#",".","."]]',
  },
]

__lcRunExamples(rotateTheBox, __lcExamples)
