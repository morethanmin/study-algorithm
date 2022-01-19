/**
 * 문제 : https://www.acmicpc.net/problem/12865
 * 풀이 : https://namu.wiki/w/%EB%B0%B0%EB%82%AD%20%EB%AC%B8%EC%A0%9C?from=0-1%20%EB%B0%B0%EB%82%AD%20%EB%AC%B8%EC%A0%9C
 * 난이도(영채님 피셜) : 계단오르기보다  어려움.
 */

 const readline = require('readline')
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })
 
 let inputs = []
 
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