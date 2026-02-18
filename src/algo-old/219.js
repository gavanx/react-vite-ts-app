var containsNearbyDuplicate = function (nums, k) {
  const m = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      if (m.get(nums[i]) + k > i) {
        return true
      } else {
        m.set(nums[i], i)
      }
    } else {
      m.set(nums[i], i)
    }
  }
  return false
} 

// 示例 1: 输入：s = "III"  输出：3
try { const got = romanToInt("III"); const expected = 3; console.log(1, { ok: got === expected, got, expected }); } catch (e) { console.log(1, { ok: false, error: String(e) }); }

// 示例 2: 输入：s = "IV"  输出：4
try { const got = romanToInt("IV"); const expected = 4; console.log(2, { ok: got === expected, got, expected }); } catch (e) { console.log(2, { ok: false, error: String(e) }); }

// 示例 3: 输入：s = "IX"  输出：9
try { const got = romanToInt("IX"); const expected = 9; console.log(3, { ok: got === expected, got, expected }); } catch (e) { console.log(3, { ok: false, error: String(e) }); }

// 示例 4: 输入：s = "LVIII"  输出：58
try { const got = romanToInt("LVIII"); const expected = 58; console.log(4, { ok: got === expected, got, expected }); } catch (e) { console.log(4, { ok: false, error: String(e) }); }

// 示例 5: 输入：s = "MCMXCIV"  输出：1994
try { const got = romanToInt("MCMXCIV"); const expected = 1994; console.log(5, { ok: got === expected, got, expected }); } catch (e) { console.log(5, { ok: false, error: String(e) }); }
