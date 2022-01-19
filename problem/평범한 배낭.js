/**
 * 문제 : https://www.acmicpc.net/problem/12865
 * 난이도(영채님 피셜) : 계단오르기보다  어려움.
 * 유형 : 동적 계획법
 */

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
   //N(물품 수) K(최대 무게)
   const [N, K] = inputs.shift().split(' ').map((el)=>+el)
   // console.log(N,K);
   //W(무게) V(가치)
   inputs.forEach((val, idx, arr)=>{
     console.log(val);

   })
   process.exit()
 })