class Studente:
    def __init__(self, nome, cognome, matricola):
        self.nome = nome
        self.cognome = cognome
        self.matricola = matricola
        self.voti = []

    def aggiungiVoto(self):
        while True:
            try:
                voto = float(input(f"Inserisci un voto per {self.nome} {self.cognome} (0-10): "))
                if 0 <= voto <= 10:
                    self.voti.append(voto)
                    print(f"Voto {voto} aggiunto.")
                    break
                else:
                    print("Errore: il voto deve essere compreso tra 0 e 10.")
            except ValueError:
                print("Errore: inserisci un numero valido.")

    def calcolaMedia(self):
        if len(self.voti) == 0:
            return 0
        return sum(self.voti) / len(self.voti)

# Funzione per creare un nuovo studente con input
def crea_studente():
    nome = input("Inserisci il nome dello studente: ")
    cognome = input("Inserisci il cognome dello studente: ")
    while True:
        try:
            matricola = int(input("Inserisci la matricola (numero intero): "))
            break
        except ValueError:
            print("Errore: inserisci un numero intero valido per la matricola.")
    return Studente(nome, cognome, matricola)

# Lista studenti
studenti = []

# Creiamo uno o più studenti
num_studenti = int(input("Quanti studenti vuoi creare? "))

for _ in range(num_studenti):
    stud = crea_studente()
    # Aggiungi voti
    while True:
        stud.aggiungiVoto()
        altro = input("Vuoi inserire un altro voto? (s/n): ").lower()
        if altro != 's':
            break
    studenti.append(stud)

# Mostra le medie
for stud in studenti:
    print(f"{stud.nome} {stud.cognome} (matricola {stud.matricola}) ha media: {stud.calcolaMedia():.2f}")
