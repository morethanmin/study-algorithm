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
  for (i = 1; i <= N; i++) {
    let stars = "";
    for (y = 1; y <= i; y++) {
      stars += "*";
    }
    console.log(stars);
  }
  process.exit();
});
