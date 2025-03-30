function maxActiveSectionsAfterTrade(s) {
  // 处理时在 s 的两侧加上 '1'
  let t = '1' + s + '1';
  let n = t.length;
  // 存储所有被 '0' 包围的连续 '1' 区块的起始和结束位置
  let oneBlocks = [];
  // 存储所有被 '1' 包围的连续 '0' 区块的起始和结束位置
  let zeroBlocks = [];

  // 找出所有被 '0' 包围的连续 '1' 区块
  for (let i = 1; i < n - 1; i++) {
    if (t[i] === '1' && t[i - 1] === '0' && t[i + 1] === '0') {
      let start = i;
      while (i < n - 1 && t[i] === '1') {
        i++;
      }
      oneBlocks.push([start, i - 1]);
    }
  }

  // 找出所有被 '1' 包围的连续 '0' 区块
  for (let i = 1; i < n - 1; i++) {
    if (t[i] === '0' && t[i - 1] === '1' && t[i + 1] === '1') {
      let start = i;
      while (i < n - 1 && t[i] === '0') {
        i++;
      }
      zeroBlocks.push([start, i - 1]);
    }
  }

  let originalCount = 0;
  for (let i = 0; i < n; i++) {
    if (t[i] === '1' && (i === 0 || t[i - 1] === '0')) {
      originalCount++;
    }
  }

  let maxCount = originalCount;

  // 遍历所有可能的操作组合
  for (let i = 0; i <= oneBlocks.length; i++) {
    for (let j = 0; j < zeroBlocks.length; j++) {
      let temp = t.split('');
      if (i < oneBlocks.length) {
        let [start1, end1] = oneBlocks[i];
        for (let k = start1; k <= end1; k++) {
          temp[k] = '0';
        }
      }
      let [start0, end0] = zeroBlocks[j];
      for (let k = start0; k <= end0; k++) {
        temp[k] = '1';
      }
      let newCount = 0;
      for (let k = 0; k < n; k++) {
        if (temp[k] === '1' && (k === 0 || temp[k - 1] === '0')) {
          newCount++;
        }
      }
      maxCount = Math.max(maxCount, newCount);
    }
  }

  return maxCount;
}

console.log(maxActiveSectionsAfterTrade('01'));
console.log(maxActiveSectionsAfterTrade('0100'));
