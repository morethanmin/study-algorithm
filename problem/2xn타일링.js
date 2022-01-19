/**
 * 2xn 크기의 직사각형을 1x2, 2x1 타일로 채우는 방법의 수 (boj 11726 참고)
 * 
 * 입력 : n (1<=n<=1000)
 * 출력 : 2xn 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지
 * 
 * 유형 : 동적 계획법
 *  */

 const readline = require('readline')
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })