// 아직 실패

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

rl.on('line',(line)=>{
  inputs.push(line)
}).on('close',()=>{
  const 식 = inputs[0]
  if(식.includes('()')) return console.log('ROCK');
  console.log(eval(식));
})