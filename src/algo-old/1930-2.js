var countPalindromicSubsequence = function (s) {
  const n = s.length
  const seen = new Set()
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (s[i] === s[k]) {
          seen.add(s[i] + s[j] + s[k])
        }
      }
    }
  }
  return seen.size
}

console.log(countPalindromicSubsequence('aabca'))

console.log(countPalindromicSubsequence('adc'))
console.log(countPalindromicSubsequence('bbcbaba'))
console.log(
  countPalindromicSubsequence(
    'dyawwfblfupdznpnefytjzkfcnmnyajkzcjibyqfsqvwazsxbweandmbpfthqvkendvrjyuafkjvqaaamtdkotsecjfkbzmkxlwvamxgioyrcmvodnudrtshpggshsmpnzgxijdtwtuquzaqvgkamwewzkzlgltrnizeiwulcwtgulaoczvdsdjloyzzevxndruftnuonbnoszeerqwfysoylfbzkknkmishbsrftpbtdmezzzkekpgjfydksprfdhiqnnupglvopdwtswybvgqleswmhnctywgwmslbcuvtxqirgjasmpflgzvmpopwrbcvqcczgpspvsbqllwakutlxfeqihkalxjrjzhuisqteowqttuemcjnuzihxckqqtfwmiljeeaeinqhoeqbcsxrwdijdkvtwupzifvgezafsfwlvdhzwmlozeenkoxkgujuljygocsivsupcxzsncvfjszvfgvllpbzalqxmsbjyhgxapltdkrishgunktzpwzbtpubbkefzuzvaysicksrujmweielgcgfjqc'
  )
)
