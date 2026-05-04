/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodSubarrays = function (nums) {
  // or_left: 数组元素为 [子数组或值, 最小左端点]，对应 Python 的 or_left 列表
  let or_left = [];
  // last: 记录每个数字最后出现的索引，对应 Python 的 last 字典
  let last = {};
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    // 更新当前数字的最后出现位置
    last[x] = i;

    // 步骤1：更新所有已存在的子数组的或值（将当前x加入或运算）
    for (let p of or_left) {
      p[0] |= x;
    }
    // 步骤2：添加当前数字单独作为子数组的情况
    or_left.push([x, i]);

    // 步骤3：原地去重（相同或值只保留最左边的，对应 Python 的原地去重逻辑）
    let idx = 1;
    for (let j = 1; j < or_left.length; j++) {
      if (or_left[j][0] !== or_left[j - 1][0]) {
        or_left[idx] = or_left[j];
        idx++;
      }
    }
    // 删除去重后多余的元素
    or_left.splice(idx);

    // 步骤4：计算当前右端点i贡献的合法子数组数量
    for (let k = 0; k < or_left.length; k++) {
      const [or_val, left] = or_left[k];
      // 确定当前or_val对应的右端边界：下一个or_val的左端点-1，或当前i（最后一个元素）
      const right = (k < or_left.length - 1) ? (or_left[k + 1][1] - 1) : i;
      // 获取or_val最后出现的位置，不存在则为-1
      const j = last.hasOwnProperty(or_val) ? last[or_val] : -1;

      // 如果or_val最后出现的位置 >= 当前左边界，计算贡献
      if (j >= left) {
        ans += Math.min(right, j) - left + 1;
      }
    }
  }

  return ans;
};

// 测试示例（可直接运行验证）
console.log(countGoodSubarrays([1, 2, 3]));  // 可根据实际预期值调整
console.log(countGoodSubarrays([3, 1, 2]));  // 测试不同输入