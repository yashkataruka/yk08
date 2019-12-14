import re

# Import original script
matrix = list()
for _ in range(int(input().split()[0])):
    matrix.append(list(input()))
print(matrix)

# Rotate the matrix
matrix = list(zip(*matrix))
print(matrix)

# Prep regex sample
sample = str()
for subset in matrix:
    for letter in subset:
        sample += letter
print(sample)
# Substitute invalid characters with a space
print(re.sub(r'(?<=\w)([^\w\d]+)(?=\w)', ' ', sample))
