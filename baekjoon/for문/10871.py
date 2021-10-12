N, X = map(int,input().split())
A = list(map(int,input().split()))

answer = ""
for i in range(N):
  if A[i] < X:
    answer += f"{A[i]} "
print(answer)