/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  // 1. 建立技能到下标的映射，方便后续二进制压缩
  const sid = new Map()
  req_skills.forEach((s, i) => sid.set(s, i))
  const skillCount = req_skills.length
  const peopleCount = people.length
  const fullMask = 1 << skillCount // 所有技能都满足的掩码（目标状态）

  // 2. 初始化DP数组：f[i][j] 表示前i个人中选，凑出技能掩码j的最小人员集合（用二进制数表示）
  //    用二维数组模拟，f[0] 表示前0个人（没人选）的状态
  const f = new Array(peopleCount + 1)
  // 初始值：用 (1 << peopleCount) - 1 表示“不可能”（所有位都为1，人员数最多）
  const impossibleMask = (1 << peopleCount) - 1
  for (let i = 0; i <= peopleCount; i++) {
    f[i] = new Array(fullMask).fill(impossibleMask)
  }
  f[0][0] = 0 // 前0个人，凑出0个技能，需要0个人

  // 3. 遍历每个人，更新DP状态
  for (let i = 0; i < peopleCount; i++) {
    // 压缩当前人的技能为二进制掩码
    let personSkillMask = 0
    people[i].forEach((s) => {
      if (sid.has(s)) {
        personSkillMask |= 1 << sid.get(s)
      }
    })

    // 遍历所有可能的技能掩码状态
    for (let j = 0; j < fullMask; j++) {
      // 选项1：不选当前这个人，状态继承前i个人的结果
      const notChoose = f[i][j]
      // 选项2：选当前这个人，先找“扣除当前人技能后”的状态，再加上当前人
      const prevState = j & ~personSkillMask // 去掉当前人技能后的剩余技能掩码
      const choose = f[i][prevState] | (1 << i) // 加上当前人的下标（二进制位标记）

      // 选择人员数更少的方案（通过统计二进制中1的个数判断人数）
      f[i + 1][j] = countBits(notChoose) < countBits(choose) ? notChoose : choose
    }
  }

  // 4. 解析最终结果：从最终的人员掩码中提取下标
  const resultMask = f[peopleCount][fullMask - 1]
  const result = []
  for (let i = 0; i < peopleCount; i++) {
    if ((resultMask >> i) & 1) {
      result.push(i)
    }
  }
  return result
}

// 辅助函数：统计二进制数中1的个数（替代Python的bit_count()）
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



const CASE_SLOW_MS = 20;
const TOTAL_SLOW_MS = 100;

function __lcRunExamples(fn, cases) {
  let totalMs = 0;
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i];
    if (comment) console.log(`${i + 1}`, comment);
    const t0 = performance.now();
    try {
      const got = fn(...args);
      const ms = performance.now() - t0;
      totalMs += ms;
      const gotOut = Array.isArray(got) ? got.join() : got;
      const expectedOut = Array.isArray(expected) ? expected.join() : expected;
      const ok = gotOut === expectedOut;
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;';
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut });
      const slow = ms > CASE_SLOW_MS;
      const timeStyle = slow ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;' : 'color:#64748b;';
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`);
    } catch (e) {
      const ms = performance.now() - t0;
      totalMs += ms;
      const slow = ms > CASE_SLOW_MS;
      const timeStyle = slow ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;' : 'color:#64748b;';
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`);
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) }); throw e;
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS;
  const totalStyle = totalSlow ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;' : 'color:#64748b;';
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle);
}

const __lcExamples = [
  { args: [["java", "nodejs", "reactjs"], [["java"], ["nodejs"], ["nodejs", "reactjs"]]], expected: [0, 2], comment: "// 输入：req_skills = [\"java\",\"nodejs\",\"reactjs\"], people = [[\"java\"],[\"nodejs\"],[\"nodejs\",\"reactjs\"]]  输出：[0,2]" },
  { args: [["algorithms", "math", "java", "reactjs", "csharp", "aws"], [["algorithms", "math", "java"], ["algorithms", "math", "reactjs"], ["java", "csharp", "aws"], ["reactjs", "csharp"], ["csharp", "math"], ["aws", "java"]]], expected: [1, 2], comment: "// 输入：req_skills = [\"algorithms\",\"math\",\"java\",\"reactjs\",\"csharp\",\"aws\"], people = [[\"algorithms\",\"math\",\"java\"],[\"algorithms\",\"math\",\"reactjs\"],[\"java\",\"csharp\",\"aws\"],[\"reactjs\",\"csharp\"],[\"csharp\",\"math\"],[\"aws\",\"java\"]]  输出：[1,2]" },
];

__lcRunExamples(smallestSufficientTeam, __lcExamples);