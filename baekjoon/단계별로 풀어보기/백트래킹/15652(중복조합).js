const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs =[]

const getMultisetCombination = (arr, selectNumber) => {
  const result = []

  if(selectNumber === 1) return arr.map((el) => [el])
  arr.forEach((value,index,origin) => {
    const rest = origin,
    
  });
}