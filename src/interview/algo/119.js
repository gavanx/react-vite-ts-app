var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  } else {
    let last = [1, 1];
    let cur = [];
    for (let i = 1; i <= rowIndex; i++) {
      cur[0] = 1;
      for (let j = 1; j < i; j++) {
        cur[j] = last[j - 1] + last[j];
      }
      cur[i] = 1;
      last = cur;
      cur = [];
    }
    return last;
  }
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
