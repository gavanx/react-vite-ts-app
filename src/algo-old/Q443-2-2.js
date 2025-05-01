var longestPalindrome = function (s, t) {
  const n = s.length;
  const m = t.length;
  const st = s + t;
  let ans = 0;

  for (let i = 0; i < n + m; i++) {
    for (let j = i; j < n + m; j++) {
      const subStr = st.slice(i, j + 1);
      const reversedSubStr = subStr.split('').reverse().join('');
      // 检查子串是否为回文串
      if (subStr === reversedSubStr) {
        // 确保子串包含 s 和 t 的部分
        let hasS = false;
        let hasT = false;
        for (let k = i; k <= j; k++) {
          if (k < n) {
            hasS = true;
          } else {
            hasT = true;
          }
        }
        if (hasS && hasT) {
          ans = Math.max(ans, j - i + 1);
        }
      }
    }
  }
  return ans;
};

console.log(longestPalindrome('abcd', 'ecdba'));
