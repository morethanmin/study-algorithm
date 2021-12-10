const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
rl.on("line", (line) => {
  const input = line.split(" ");

  if (input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A + B + "\n";
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});
