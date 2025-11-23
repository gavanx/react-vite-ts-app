var countPalindromicSubsequence = function (s) {
  const n = s.length
  let result = 0
  for (let c = 0; c < 26; c++) {
    const ch = String.fromCharCode(97 + c)
    let first = -1
    let last = -1
    for (let i = 0; i < n; i++) {
      if (s[i] === ch) {
        if (first === -1) {
          first = i
        }
        last = i
      }
    }
    if (first !== -1 && last !== -1 && last - first > 1) {
      const seen = new Set()
      for (let i = first + 1; i < last; i++) {
        seen.add(s[i])
      }
      result += seen.size
    }
  }
  return result
}

console.log(
  countPalindromicSubsequence(
    'dyawwfblfupdznpnefytjzkfcnmnyajkzcjibyqfsqvwazsxbweandmbpfthqvkendvrjyuafkjvqaaamtdkotsecjfkbzmkxlwvamxgioyrcmvodnudrtshpggshsmpnzgxijdtwtuquzaqvgkamwewzkzlgltrnizeiwulcwtgulaoczvdsdjloyzzevxndruftnuonbnoszeerqwfysoylfbzkknkmishbsrftpbtdmezzzkekpgjfydksprfdhiqnnupglvopdwtswybvgqleswmhnctywgwmslbcuvtxqirgjasmpflgzvmpopwrbcvqcczgpspvsbqllwakutlxfeqihkalxjrjzhuisqteowqttuemcjnuzihxckqqtfwmiljeeaeinqhoeqbcsxrwdijdkvtwupzifvgezafsfwlvdhzwmlozeenkoxkgujuljygocsivsupcxzsncvfjszvfgvllpbzalqxmsbjyhgxapltdkrishgunktzpwzbtpubbkefzuzvaysicksrujmweielgcgfjqc'
  )
)
