var generate = function (numRows) {
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  } else {
    let last = [1, 1];
    let cur;
    const ret = [[1], last];
    for (let i = 2; i < numRows; i++) {
      cur = [1];
      for (let j = 1; j < i; j++) {
        cur[j] = last[j - 1] + last[j];
      }
      cur[i] = 1;
      last = cur;
      ret.push(cur);
    }
    return ret;
  }
};
console.log(generate(5).join("\n"));
