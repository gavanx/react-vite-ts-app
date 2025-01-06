var hasMatch = function (s, p) {
  // if (p === '*') {
  //   return true;
  // }
  // if (p.length > 1) {
  //   if (p[0] === '*') {
  //     return s.includes(p.substr(1));
  //   } else if (p[p.length - 1] === '*') {
  //     return s.includes(p.substr(0, p.length - 1));
  //   }
  // }
  p = p.replace('*', '[a-z]{0,}');
  return new RegExp(p).test(s);
};

console.log(hasMatch('leetcode', 'ee*e') === true);
console.log(hasMatch('car', 'c*v') === false);
console.log(hasMatch('luck', 'u*') === true);
console.log(hasMatch('l', '*') === true);
console.log(hasMatch('jjj', '*j') === true);
console.log(hasMatch('pep', 'q*') === false);
console.log(hasMatch('hccc', 'm*c') === false);
console.log(hasMatch('kvb', 'k*v') === true);
