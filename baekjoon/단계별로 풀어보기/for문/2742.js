const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = parseInt(input[0]);
  let answer = "";
  for (i = N; i > 0; i--) {
    answer += `${i} \n`;
  }
  console.log(answer);
  process.exit();
});
