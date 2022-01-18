/** 
 * 백트래킹은 모든 경우의 수를 확인해보는 알고리즘이다.
 * 
 * 경우의 수를 확인해보는 방식은 다양한데, 
 * 무식하게 전부 다 확인하는 브루트포스,
 * 순서와 상관없이 경우의 수를 확인하는 조합,
 * 순서를 고려하여 경우의 수를 확인하는 순열 등이 있다.
 */

const getCombinations = (arr, selectNumber) => {
  const result = []
  if(selectNumber === 1) return arr.map((el)=>[el])
  arr.forEach((fixed,idx,origin) => {
    const restArr = origin.slice(idx + 1)
    const combinations = getCombinations(restArr, selectNumber-1)
    const attached = combinations.map((el)=>[fixed,...el])
    result.push(...attached)
  });
  return result
}

const getPermutations = (arr, selectNumber) => {
  const result = []
  if(selectNumber === 1) return arr.map((el)=>[el])
  arr.forEach((fixed,idx,origin)=>{
    const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
    const permutations = getPermutations(rest, selectNumber-1)
    const attached = permutations.map((el)=> [fixed,...el])
    result.push(...attached)
  })
  return result
}

console.log(`-----getCombinations(4,3)-----`)
console.log(getCombinations([1,2,3,4],3))
console.log(`-----getPermutations(4,3)-----`)
console.log(getPermutations([1,2,3,4],3))