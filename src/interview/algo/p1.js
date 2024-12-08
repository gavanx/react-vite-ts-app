// 1-10 十个数字乱序随机排列，其中某个数字写错了，请找出其中重复和缺少的数字，例如
const arr = [10, 7, 1, 3, 2, 5, 4, 7, 9, 8];
function solution(a) {
  let miss, dup;
  const flag = [];
  for (let i = 0; i < 10; i++) {
    if (flag[a[i]]) {
      dup = a[i];
    } else {
      flag[a[i]] = true;
    }
  }
  for (let i = 1; i < 11; i++) {
    if (flag[i] === undefined) {
      miss = i;
      break;
    }
  }
  return [miss, dup];
}
console.log(solution(arr)); // [6, 7]
