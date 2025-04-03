var longestPalindrome = function (s, t) {
  let res = 0;
  const calc = (s, t) => {
    let i, j, c, c1;
    for (i = s.length - 1; i >= 0; i--) {
      c = s.substr(0, i + 1);
      c1 = c.split('').reverse().join('');
      if (t.indexOf(c1) !== -1) {
        res = Math.max(res, c.length * 2);
        break;
      }
      c1 = c1.substr(1);
      if (c1.length > 0 && t.indexOf(c1) !== -1) {
        res = Math.max(res, c1.length * 2);
        break;
      }
    }
  };
  calc(s, t);
  calc(t, s);
  return res;
};

console.log(longestPalindrome('abcd', 'ecdba'));
