array = [9,8,7,6,5,4,3,2,1]

const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
};

  console.log(quickSort(array));