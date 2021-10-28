import functools

A = input()
N = list(map(int, list(input())))
print(functools.reduce(lambda a, b: a+b, N))