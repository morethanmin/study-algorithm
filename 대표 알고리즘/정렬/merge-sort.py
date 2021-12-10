# 분할 정복, 재귀

array = [9,8,7,6,5,4,3,2,1]

def mergeSort(array):
  if len(array) < 2:
    return array
  mid = len(array) // 2
  low_arr = mergeSort(array[:mid])
  high_arr = mergeSort(array[mid:])

  merged_arr = []
  l = h = 0
  while l < len(low_arr) and h < len(high_arr):
    if low_arr[l] < high_arr[h]:
      merged_arr.append(low_arr[l])
      l += 1
    else:
      merged_arr.append(high_arr[h])
      h += 1
  merged_arr += low_arr[l:]
  merged_arr += high_arr[h:]
  print(merged_arr)
  return merged_arr
print("before: ", array)
mergeSort(array)
print("after: ", array)