#분할정복, 재귀

array = [9,8,7,6,5,4,3,2,1]

def quickSort(array):
  if len(array) <= 1:
    return array
  pivot = len(array) // 2
  front_arr, pivot_arr, back_arr = [], [], []
  for value in array:
    if value < array[pivot]:
      front_arr.append(value)
    elif value > array[pivot]:
      back_arr.append(value)
    else:
      pivot_arr.append(value)
  print(front_arr,pivot_arr,back_arr)
  return quickSort(front_arr) + quickSort(pivot_arr) + quickSort(back_arr)

print("before: ", array)
array = quickSort(array)
print("after: ", array)