/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function maxScore(nums1, nums2, K) {
  const n = nums1.length
  const m = nums2.length

  const f = Array.from({ length: K + 1 }, () =>
    Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity))
  )

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      f[0][i][j] = 0
    }
  }

  for (let k = 1; k <= K; k++) {
    for (let i = k - 1; i < n; i++) {
      for (let j = k - 1; j < m; j++) {
        f[k][i + 1][j + 1] = Math.max(
          f[k][i][j + 1],
          f[k][i + 1][j],
          f[k - 1][i][j] + nums1[i] * nums2[j]
        )
      }
    }
  }

  return f[K][n][m]
}

// Test cases
function test() {
  const testCases = [
    {
      nums1: [1, 3, 3, 2],
      nums2: [2, 1, 3, 4],
      k: 3,
      expected: 12,
    },
    {
      nums1: [4, 2, 3, 1, 1],
      nums2: [7, 5, 10, 9, 6],
      k: 1,
      expected: 42,
    },
    {
      nums1: [1, 2, 3, 4],
      nums2: [1, 2, 3, 4],
      k: 2,
      expected: 14,
    },
  ]

  for (const testCase of testCases) {
    const result = maxScore(testCase.nums1, testCase.nums2, testCase.k)
    console.log(
      `Input: nums1=${JSON.stringify(testCase.nums1)}, nums2=${JSON.stringify(testCase.nums2)}, k=${testCase.k}`
    )
    console.log(`Output: ${result}`)
    console.log(`Expected: ${testCase.expected}`)
    console.log(result === testCase.expected ? 'PASS' : 'FAIL')
    console.log('---')
  }
}

test()
