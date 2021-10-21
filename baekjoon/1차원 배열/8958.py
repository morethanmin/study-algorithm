T = int(input())
result = ""
for i in range(T):
  answer = input()
  score = 0
  acc = 0
  for j in answer:
    if(j=="O"):
      score = score + acc + 1
      acc = acc + 1
    else:
      acc = 0
  result = result + f"{score}\n"
print(result)