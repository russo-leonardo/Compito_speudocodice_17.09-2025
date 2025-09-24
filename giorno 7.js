class Studente {
    constructor(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.voti = [];
    }

    aggiungiVoto() {
        let voto;
        do {
            voto = prompt(`Inserisci un voto per ${this.nome} ${this.cognome} (0-10):`);
            voto = parseFloat(voto);
            if (isNaN(voto) || voto < 0 || voto > 10) {
                alert("Errore: il voto deve essere un numero tra 0 e 10.");
                voto = null;
            }
        } while (voto === null);
        this.voti.push(voto);
        console.log(`Voto ${voto} aggiunto.`);
    }

    calcolaMedia() {
        if (this.voti.length === 0) return 0;
        let somma = this.voti.reduce((acc, curr) => acc + curr, 0);
        return somma / this.voti.length;
    }
}

function creaStudente() {
    let nome = prompt("Inserisci il nome dello studente:");
    let cognome = prompt("Inserisci il cognome dello studente:");
    let matricola;
    do {
        matricola = prompt("Inserisci la matricola (numero intero):");
        matricola = parseInt(matricola);
    } while (isNaN(matricola));

    return new Studente(nome, cognome, matricola);
}

// Creazione studenti
let studenti = [];
let numStudenti = parseInt(prompt("Quanti studenti vuoi creare?"));

for (let i = 0; i < numStudenti; i++) {
    let stud = creaStudente();
    do {
        stud.aggiungiVoto();
    } while (confirm("Vuoi inserire un altro voto?"));
    studenti.push(stud);
}

// Mostra le medie in console
studenti.forEach(stud => {
    console.log(`${stud.nome} ${stud.cognome} (matricola ${stud.matricola}) ha media: ${stud.calcolaMedia().toFixed(2)}`);
});
