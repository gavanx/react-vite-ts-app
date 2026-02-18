var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--]
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
  return nums1
}


// 示例 1: 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  输出：[1,2,2,3,5,6]
try {
  const got = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
  const expected = [1,2,2,3,5,6];
  const gotOut = Array.isArray(got) ? got.join() : got;
  const expectedOut = Array.isArray(expected) ? expected.join() : expected;
  const ok = gotOut === expectedOut;
  console.log(1, { ok, got: gotOut, expected: expectedOut });
} catch (e) { console.log(1, { ok: false, error: String(e) }); }

// 示例 2: 输入：nums1 = [1], m = 1, nums2 = [], n = 0  输出：[1]
try {
  const got = merge([1], 1, [], 0);
  const expected = [1];
  const gotOut = Array.isArray(got) ? got.join() : got;
  const expectedOut = Array.isArray(expected) ? expected.join() : expected;
  const ok = gotOut === expectedOut;
  console.log(2, { ok, got: gotOut, expected: expectedOut });
} catch (e) { console.log(2, { ok: false, error: String(e) }); }

// 示例 3: 输入：nums1 = [0], m = 0, nums2 = [1], n = 1  输出：[1]
try {
  const got = merge([0], 0, [1], 1);
  const expected = [1];
  const gotOut = Array.isArray(got) ? got.join() : got;
  const expectedOut = Array.isArray(expected) ? expected.join() : expected;
  const ok = gotOut === expectedOut;
  console.log(3, { ok, got: gotOut, expected: expectedOut });
} catch (e) { console.log(3, { ok: false, error: String(e) }); }
