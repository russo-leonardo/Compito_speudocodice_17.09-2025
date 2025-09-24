
array = [10, 3, 8, 7, 6, 5, 1, 3, 2]
minVal = min(array)
maxVal = max(array)
print("Minimo:", minVal)
print("Massimo:", maxVal)

array = [10, 3, 8, 7, 6, 5, 1, 3, 2]
x = 0
for i in range(len(array)):
    if array[i] == 5:  # Se un elemento è 5
        x = i
print("Indice di 5:", x)
