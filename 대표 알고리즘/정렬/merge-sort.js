let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const mergeSort = (array) => {
  const result = array.concat()
  if (result.length < 2)
    return result
  const mid = Math.floor(result.length/2)
  let lowArr = mergeSort(result.slice(0,mid))
  let highArr = mergeSort(result.slice(mid))
  
  let mergedArr = []
  let l = h = 0
  while(l < lowArr.length && h < highArr.length){
    if(lowArr[l] < highArr[h]) {
      mergedArr.push(lowArr[l])
      l += 1
    } else {
      mergedArr.push(highArr[h])
      h += 1
    }
  }
  mergedArr = [...mergedArr,...lowArr.slice(l)]
  mergedArr = [...mergedArr,...highArr.slice(h)]
  // console.log(mergedArr);
  return mergedArr
}

console.log(`before : ${array}`)
array = mergeSort(array)
console.log(`after : ${array}`)

export {}
