var reverseBits = function (num) {
  let b = num < 0 ? (0xffffffff + num + 1).toString(2) : num.toString(2);
  if (b[0] === "1") {
    b = "0" + b;
  }
  const a = b.split("0");
  a[-1] = [];
  a[a.length] = [];
  let ans = 0;
  for (let i = 1; i < a.length; i++) {
    ans = Math.max(ans, a[i - 1].length + a[i].length + 1);
  }
  if (num === -1) {
    ans -= 1;
  }
  return ans;
};

console.log(reverseBits(1775) === 8);
console.log(reverseBits(7) === 4);
console.log(reverseBits(-1) === 32);
console.log(reverseBits(-3) === 32);
