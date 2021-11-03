const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line',(line)=>{
  input.push(line)
}).on('close',()=>{
  const T = parseInt(input[0])
  for(i=1; i<=T; i++){
    const [R, S] = input[i].split(' ')
    let result = ""
    for(j=0; j<S.length; j++){
      for(k=0; k<parseInt(R); k++){
        result = `${result}${S[j]}`
      }
    }
    console.log(result);
  }
  process.exit()
})