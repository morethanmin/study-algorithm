result = set()
for i in range(10):
  a, nmg = divmod(int(input()),42)
  result.add(nmg)
print(len(list(result)))