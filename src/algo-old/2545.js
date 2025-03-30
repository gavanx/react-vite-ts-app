var sortTheStudents = function (score, k) {
  const m = score.length;
  const m1 = m - 1;
  const n = score[0].length;
  let i, j, mx, tmp;
  for (i = 0; i < m1; i++) {
    mx = i;
    for (j = i + 1; j < m; j++) {
      if (score[j][k] > score[mx][k]) {
        mx = j;
      }
    }
    if (mx !== i) {
      tmp = score[mx];
      score[mx] = score[i];
      score[i] = tmp;
    }
  }
  return score;
};

console.log(
  sortTheStudents(
    [
      [3, 4],
      [5, 6],
    ],
    0
  ).join("\n")
);
