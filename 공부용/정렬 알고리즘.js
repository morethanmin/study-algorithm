/* 정렬 알고리즘을 복습 - 1 이해하고 작성해보기
 * 2022-01-16 : ~countingSort
 * 2022-01-17 : ~mergeSort
 * 2022-01-18 : ~quickSort
 */

let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//버블 정렬은 인접한 두값을 순차적으로 비교하며 정렬하는 기법 O(n*n)
const bubbleSort = (array) => {
  let result = array.concat()
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j <= result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const tempVal = result[j]
        result[j] = result[j + 1]
        result[j + 1] = tempVal
      }
    }
  }
  return result
}

//선택 정렬은 가장 작은 값을 찾아 순차적으로 정렬하는 기법 O(n*n)
const selectionSort = (array) => {
  let result = array.concat()
  for (let i = 0; i < result.length - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j <= result.length; j++) {
      if (result[minIdx] > result[j]) {
        minIdx = j
      }
    }
    //최소값이 바뀐 경우
    if (minIdx !== i) {
      const tempVal = result[i]
      result[i] = result[minIdx]
      result[minIdx] = tempVal
    }
  }
  return result
}

// 삽입 정렬은 정렬된 데이터 그룹을 늘려가며 알맞은 자리에 데이터를 삽입하는 방식 O(n*n)
const insertionSort = (array) => {
  let result = array.concat()
  for (let i = 1; i < result.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (result[j] < result[j - 1]) {
        const tempVal = result[j]
        result[j] = result[j - 1]
        result[j - 1] = tempVal
      }
    }
  }
  return result
}

// 계수 정렬은 좁은 범위안이라는 조건하에서 O(N)의 속도를 가지는 정렬 방식이다.
const countingSort = (array) => {
  let arr = array.concat()
  let maxVal = 0
  arr.forEach((value, index, origin) => {
    if (maxVal < value) maxVal = value
  })
  const countArray = Array(maxVal).fill(0)
  arr.forEach((value, index, origin) => {
    countArray[value - 1]++
  })
  let result = []
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      result.push(i + 1)
    }
  }

  return result
}

// 병합 정렬은 반으로쪼갤 수 있는 만큼 쪼개 다음 가장 낮은 단위부터 정렬하는 분할 정복 방식의 정렬이다. O(nlogn)
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

// 퀵 정렬도 병합 정렬과 마찬가지로 분할정복 알고리즘을 사용하지만, Pivot을 설정하고 그 값을 기준으로 정렬한다. O(nlogn)
const quickSort = (array) => {
  const result = array.concat()
  if (result.length <2) return result
  const pivot = result[0]
  const left = []
  const right = []
  //pivot을 제외한 값들을 pivot을 기준으로 정렬
  for(let i=1; i<result.length; i++){
    if(result[i] <= pivot) left.push(result[i])
    else right.push(result[i])
  }

  const lSorted = quickSort(left)
  const rSorted = quickSort(right)
  return [...lSorted,pivot,...rSorted]
}


console.log(`-----bubbleSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${bubbleSort(array)}`)
console.log(`-----selectionSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${selectionSort(array)}`)
console.log(`-----insertionSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${insertionSort(array)}`)
console.log(`-----countingSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${countingSort(array)}`)
console.log(`-----mergeSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${mergeSort(array)}`)
console.log(`-----quickSort-----`)
console.log(`before : ${array}`)
console.log(`after : ${quickSort(array)}`)
