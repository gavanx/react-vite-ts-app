var maxRepeating = function (sequence, word) {
  const max = Math.floor(sequence.length / word.length);
  for (let i = max; i > 0; i--) {
    if (sequence.includes(new Array(i).fill(word).join(""))) {
      return i;
    }
  }
  return 0;
};

console.log(maxRepeating("ababc", "ab") === 2);
console.log(maxRepeating("ababc", "ba") === 1);
console.log(maxRepeating("ababc", "ac") === 0);
