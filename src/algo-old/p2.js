// 有序数组平方后排序
const arr = [-4, -1, 0, 3, 5];
function solution(a) {
  let left = 0;
  let right = a.length - 1;
  let m, n;
  let ret = [],
    i = right;
  while (true) {
    m = a[left] * a[left];
    n = a[right] * a[right];
    if (m > n) {
      ret[i] = m;
      i--;
      left++;
    } else if (m < n) {
      ret[i] = n;
      i--;
      right--;
    } else if (m === n) {
      ret[i] = m;
      i--;
      if (i >= 0) {
        ret[i--] = m;
      }
      left++;
      right--;
    }
    if (i < 0) {
      break;
    }
  }
  return ret;
}

console.log(solution(arr)); // [0, 1, 9, 16, 25]
