
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
