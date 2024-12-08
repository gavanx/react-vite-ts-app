var a = 1;
function main() {
  console.log('if前面', a);
  if (false) {
    var a = 2;
  }
  console.log('if后面', a);
}
export default main