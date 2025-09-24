# Primo blocco
a = int(input("Dimmi la base: "))
b = int(input("Dimmi l'altezza: "))
a = a * b
print(a)

# Secondo blocco
a = 5  # numero diverso da zero
b = 10 # numero diverso da zero
c = a
d = b
c = b
d = a

# Conversione da Celsius a Kelvin
f = 273.15
x = float(input("Inserisci la temperatura in Celsius: "))
z = x * f
print(z)

# Terzo blocco
a = 3
b = 4
c = 5

if a > b and c > a:
    print(a)

if b > a and b < c:
    print(b)

# Esercizio 2 - Anno bisestile e selezione della casa
anno = int(input("Scrivi l'anno: "))

# Verifica se l'anno è bisestile
bisestile = True
if (anno % 4 != 0) or (anno % 100 == 0 and anno % 400 != 0):
    bisestile = False

# Stampa se l'anno è bisestile o no
if bisestile:
    print(f"L'anno {anno} è bisestile.")
else:
    print(f"L'anno {anno} non è bisestile.")

# Selezione della casa
print("Seleziona un caso (1-7):")
print("1. Sala")
print("2. Cucina")
print("3. Camera")
print("4. Bagno")
print("5. Cameretta")
print("6. Cucina")
print("7. Bagno")

scelta = int(input())

# Gestione dei casi
if scelta == 1:
    print("Sala")
elif scelta == 2 or scelta == 3 or scelta == 5:
    print("Cameretta")
elif scelta == 6:
    print("Cucina")
elif scelta == 7:
    print("Bagno")
else:
    print("Opzione non valida")

array = [10, 3, 8, 7, 6, 5, 1, 3, 2]
for i in array:
    print(i)

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

array = [10, 3, 8, 7, 6, 5, 1, 3, 2]
maxVal = max(array)
print("Massimo:", maxVal)

array = [10, 3, 8, 7, 6, 5, 1, 3, 2]
maxVal = max(array)
print("Massimo trovato:", maxVal)
