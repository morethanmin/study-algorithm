const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const handleInput = (line) => {
  input.push(line);
};

const handleOutput = () => {
  const N = parseInt(input[0]);
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log(sum);
  process.exit();
};

rl.on("line", handleInput).on("close", handleOutput);
