// Esercizio 2 - Anno bisestile e selezione della casa
let anno = parseInt(prompt("Scrivi l'anno:"));

// Verifica se l'anno è bisestile
let bisestile = true;
if ((anno % 4 !== 0) || (anno % 100 === 0 && anno % 400 !== 0)) {
    bisestile = false;
}

// Stampa se l'anno è bisestile o no
if (bisestile) {
    console.log(`L'anno ${anno} è bisestile.`);
} else {
    console.log(`L'anno ${anno} non è bisestile.`);
}

