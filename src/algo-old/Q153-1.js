var reverseDegree = function (s) {
  let total = 0;
  let c;
  for (let i = 0; i < s.length; i++) {
    c = s.charCodeAt(i) - 97 + 1;
    // console.log(s[i], c, i + 1);
    total += (27 - c) * (i + 1);
  }
  return total;
};

console.log(reverseDegree('abc') === 148);
console.log(reverseDegree('zaza') === 160);
