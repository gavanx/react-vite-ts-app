/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  const sid = new Map()
  req_skills.forEach((s, i) => sid.set(s, i))
  const skillCount = req_skills.length
  const peopleCount = people.length
  const fullMask = 1 << skillCount

  const f = new Array(peopleCount + 1)
  const impossibleMask = (1 << peopleCount) - 1
  for (let i = 0; i <= peopleCount; i++) {
    f[i] = new Array(fullMask).fill(impossibleMask)
  }
  f[0][0] = 0

  for (let i = 0; i < peopleCount; i++) {
    let personSkillMask = 0
    people[i].forEach((s) => {
      if (sid.has(s)) {
        personSkillMask |= 1 << sid.get(s)
      }
    })

    for (let j = 0; j < fullMask; j++) {
      const notChoose = f[i][j]
      const prevState = j & ~personSkillMask
      const choose = f[i][prevState] | (1 << i)

      f[i + 1][j] = countBits(notChoose) < countBits(choose) ? notChoose : choose
    }
  }

  const resultMask = f[peopleCount][fullMask - 1]
  const result = []
  for (let i = 0; i < peopleCount; i++) {
    if ((resultMask >> i) & 1) {
      result.push(i)
    }
  }
  return result
}

function countBits(n) {
  let count = 0
  while (n > 0) {
    count += n & 1
    n = n >> 1
  }
  return count
}

// 测试示例
console.log(
  smallestSufficientTeam(
    ['java', 'nodejs', 'reactjs'],
    [['java'], ['nodejs'], ['nodejs', 'reactjs']]
  )
) // 输出：[0,2]

console.log(
  smallestSufficientTeam(
    ['algorithms', 'math', 'java', 'reactjs', 'csharp', 'aws'],
    [
      ['algorithms', 'math', 'java'],
      ['algorithms', 'math', 'reactjs'],
      ['java', 'csharp', 'aws'],
      ['reactjs', 'csharp'],
      ['csharp', 'math'],
      ['aws', 'java'],
    ]
  )
) // 输出：[1,2]

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
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
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
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
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle)
}

const __lcExamples = [
  {
    args: [
      ['java', 'nodejs', 'reactjs'],
      [['java'], ['nodejs'], ['nodejs', 'reactjs']],
    ],
    expected: [0, 2],
    comment:
      '// 输入：req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]  输出：[0,2]',
  },
  {
    args: [
      ['algorithms', 'math', 'java', 'reactjs', 'csharp', 'aws'],
      [
        ['algorithms', 'math', 'java'],
        ['algorithms', 'math', 'reactjs'],
        ['java', 'csharp', 'aws'],
        ['reactjs', 'csharp'],
        ['csharp', 'math'],
        ['aws', 'java'],
      ],
    ],
    expected: [1, 2],
    comment:
      '// 输入：req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]  输出：[1,2]',
  },
]

__lcRunExamples(smallestSufficientTeam, __lcExamples)
