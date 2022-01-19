 const readline = require('readline')
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })
 
 let inputs = []

 const getResult = (n,k,arr) => {

 }
 
 rl.on('line',(line)=>{
   inputs.push(line)
 }).on('close',()=>{
  const N = +inputs[0]
  process.exit()
 })