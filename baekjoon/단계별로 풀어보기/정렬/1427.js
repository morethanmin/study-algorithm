const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line',(line)=>{
    input.push(line)
}).on('close',()=>{
    console.log( input[0].split('').map((i)=>+i).sort((a,b)=>b-a).join(''));
    process.exit()
})