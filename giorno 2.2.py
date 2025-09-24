
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
