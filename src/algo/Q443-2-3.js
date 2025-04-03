var longestPalindrome = function (s, t) {
  const m = s.length;
  const n = t.length;
  let a,
    b,
    c,
    res = 1;
  const dfs = (i, j, x, y) => {
    if (i > j || x > y) {
      return 1;
    }
    a = s.substring(i, j);
    b = t.substring(x, y);
    c = a + b;
    if (c.length < res) {
      return res;
    }
    if (c === c.split('').reverse().join('')) {
      return (res = c.length);
    } else {
      return (res = Math.max(
        dfs(i + 1, j, x, y),
        dfs(i, j - 1, x, y),
        dfs(i, j, x + 1, y),
        dfs(i, j, x, y - 1)
      ));
    }
  };
  dfs(0, m, 0, n);
  return res;
};

console.log(longestPalindrome('a', 'a'));
console.log(longestPalindrome('abc', 'def'));
console.log(longestPalindrome('b', 'aaaa'));
console.log(longestPalindrome('abcde', 'ecdba'));
