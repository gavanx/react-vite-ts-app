var robotSim = function (commands, obstacles) {
  const DIRS = [
    [0, 1], //上
    [1, 0], //右
    [0, -1], //下
    [-1, 0], //左
  ]
  const set = new Set()
  for (const [x, y] of obstacles) {
    set.add(`${x}-${y}`)
  }
  let d = 0,
    x = 0,
    y = 0,
    ans = 0
  for (const c of commands) {
    switch (c) {
      case -2:
        d = (d + 3) % 4
        break
      case -1:
        d = (d + 1) % 4
        break
      default:
        let k = 1
        let dir = DIRS[d]
        if (dir[1] === 1) {
          for (; k <= c; k++) {
            if (set.has(`${x}-${y + k}`)) {
              break
            }
          }
          y += k - 1
        } else if (dir[1] === -1) {
          for (; k <= c; k++) {
            if (set.has(`${x}-${y - k}`)) {
              break
            }
          }
          y -= k - 1
        } else if (dir[0] === 1) {
          for (; k <= c; k++) {
            if (set.has(`${x + k}-${y}`)) {
              break
            }
          }
          x += k - 1
        } else if (dir[0] === -1) {
          for (; k <= c; k++) {
            if (set.has(`${x - k}-${y}`)) {
              break
            }
          }
          x -= k - 1
        }
        ans = Math.max(ans, x * x + y * y)

        break
    }
  }
  return ans
}

console.log(robotSim([6, -1, -1, 6], [[0, 0]]))

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
    args: [[4, -1, 3], []],
    expected: 25,
    comment: '// 输入：commands = [4,-1,3], obstacles = []  输出：25',
  },
  {
    args: [[4, -1, 4, -2, 4], [[2, 4]]],
    expected: 65,
    comment: '// 输入：commands = [4,-1,4,-2,4], obstacles = [[2,4]]  输出：65',
  },
  {
    args: [[6, -1, -1, 6], []],
    expected: 36,
    comment: '// 输入：commands = [6,-1,-1,6], obstacles = []  输出：36',
  },
  {
    args: [[6, -1, -1, 6], [[0, 0]]],
    expected: 36,
    comment: '// 输入：commands = [6,-1,-1,6], obstacles = [[0,0]]  输出：36',
  },
]

__lcRunExamples(robotSim, __lcExamples)
