T = int(input())
for iIdx, i in enumerate(range(T)):
  R, S = input().split()
  result = ""
  for jIdx, j in enumerate(S):
    for kIdx, k in enumerate(range(int(R))):
      result = result + j
  print(result)