N = int(input())
for i in range(N):
  star = i+1
  space = N-(i+1)
  print(' ' * space + f'*' * star)